var editor, aceEditor, aceRange, audioFiles = [],
    testVectorEditor, testVectorRange;
const percentWidth = .6;

function msimLoad() {
    editor = document.querySelector("#editor");
    aceEditor = ace.edit("editor");
    aceRange = require('ace/range').Range;

    aceEditor.session.setValue("#include \"rims.h\"\n\nint main() {\n    while (1) {\n        B = A;\n    }\n}")
    aceEditor.setTheme("ace/theme/sqlserver");
    //editorTheme();
    aceEditor.session.setMode("ace/mode/c_cpp");
    aceEditor.setOptions({
        useWorker: false,
        enableLiveAutocompletion: true,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        fontSize: "11pt"
    });
    aceEditor.container.addEventListener("contextmenu", function (e) {
        if (e.target.classList[0] !== "ace_text-input") {
            console.log(e.target.classList[0]);
            e.preventDefault();
            return false;
        }
    });
    aceEditor.on("guttermousedown", function (e) {
        if (e.domEvent.button === 2) {
            e.stop();
            e.preventDefault();
            const row = e.getDocumentPosition().row;
            const target = e.domEvent.target;
            if (target.className.indexOf("ace_gutter-cell") === -1)
                return;
            if (!aceEditor.isFocused())
                return;

            console.log(e.clientX > 25 + target.getBoundingClientRect().left);

            console.log(e.clientX, 25 + target.getBoundingClientRect().left);

            if (e.clientX > 25 + target.getBoundingClientRect().left)
                return;

            const breakpoints = e.editor.session.getBreakpoints(row, 0);
            if (typeof breakpoints[row] === typeof undefined) {
                e.editor.session.setBreakpoint(row);
                window.dotNetHelper.invokeMethodAsync("AddBreakpoint", row + 1);
            } else {
                e.editor.session.clearBreakpoint(row);
                window.dotNetHelper.invokeMethodAsync("RemoveBreakpoint", row + 1);
            }

            console.log(row + 1);
            e.stop();
        }
    });

    window.addEventListener("resize", function (e) {
        aceEditor.resize();
    });
}

function editorTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        aceEditor.setTheme("ace/theme/one_dark");
    else aceEditor.setTheme("ace/theme/sqlserver");
}

function toggleLed(id) {
    document.getElementById(id).classList.toggle('on');
}

function loadAudio(id) {
    let aud = document.getElementById(id);
    const audioContext = new AudioContext();

    const audio1 = new Audio(aud.src);
    const audio1Source = audioContext.createMediaElementSource(audio1);
    const audio1Gain = audioContext.createGain();
    audio1Gain.gain.value = 0.5; // Adjust the volume level as needed
    audio1Source.connect(audio1Gain).connect(audioContext.destination);
    audio1.loop = true;
    audio1.load();

    // Play the audio files simultaneously
    audioFiles.push(audio1);
}

function playAudio(i) {
    if (audioFiles)
        audioFiles[i].play();
}

function stopAudio(i) {
    if (audioFiles) {
        audioFiles[i].pause();
        audioFiles[i].currentTime = 0;
    }
}

function SetDotNetHelper(dotNetHelper) {
    window.dotNetHelper = dotNetHelper;
}

function addMarker(currentLine) {
    aceEditor.session.addMarker(new aceRange(currentLine, 0, currentLine, 1), "myMarker", "fullLine");
}
function addTestVectorMarker(currentLine) {
    testVectorEditor.session.addMarker(new testVectorRange(currentLine, 0, currentLine, 1), "myMarker", "fullLine");
}

function removeAllMarkers() {
    let markers = aceEditor.session.getMarkers();
    if (markers) {
        const markersArr = Object.keys(markers);
        for (let item of markersArr)
            aceEditor.session.removeMarker(markers[item].id);
    }
}

function removeAllTestVectorMarkers() {
    let markers = testVectorEditor.session.getMarkers();
    if (markers) {
        const markersArr = Object.keys(markers);
        for (let item of markersArr)
            testVectorEditor.session.removeMarker(markers[item].id);
    }
}

function initTestVectorEditor() {
    window.setTimeout(function () {
        testVectorEditor = ace.edit("testVectorEditor");
        testVectorRange = require('ace/range').Range;

        //editorTheme();
        testVectorEditor.session.setMode("ace/mode/text");
        testVectorEditor.setOptions({
            useWorker: false,
            enableLiveAutocompletion: true,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            fontSize: "11pt"
        });


        testVectorEditor.session.setValue("b00000000\nwait 1 s\n3\nwait 1 s\nassert 1\nassert b00000001\nassert 0x01\nwait 0.5 s\nb00000010\nwait 3000 ms\n" +
            "b11111101\nwait 200 ms\nb00010101\nwait 500 ms\nb11000011\nwait 2 s\nb01000010\nwait 1 s\n0xFF\nwait 1 s\ngeneratetd");
    }, 50);
}

function writeClearEscape() {
    XtermBlazor.getTerminalById(XtermBlazor._terminals.entries().next().value[0]).terminal.write("\x1bc");
}