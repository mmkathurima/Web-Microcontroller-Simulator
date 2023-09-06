var editor, aceEditor, aceRange, audioFiles = [],
    testVectorEditor, testVectorRange, dpl6;
const percentWidth = .6;

function msimLoad() {
    editor = document.querySelector("#editor");
    aceEditor = ace.edit("editor");
    aceRange = require('ace/range').Range;

    //aceEditor.session.setValue("#include \"rims.h\"\n\nint main() {\n    while (1) {\n        B = A;\n    }\n}")
    aceEditor.session.setValue("#include \"rims.h\"\n\nint main() {\n    while (1) {\n        B0 = A0 && A1;\n    }\n}")
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

function renderSSD() {
    window.setTimeout(function () {
        dragElement(document.getElementById("dpl6").parentElement);
        dpl6 = new js_display("dpl6", 1, 200, "red");
        dpl6.sang = 8;
        //dpl6.color("red", "green", "purple")
    }, 300);
}

function renderDial() {
    window.setTimeout(function () {
        dragElement(document.getElementById("knob").parentElement);
        $('#knob').jqxKnob({
            value: 0,
            min: 0,
            max: 255,
            startAngle: 120,
            endAngle: 420,
            snapToStep: true,
            rotation: 'clockwise',
            style: { stroke: '#dfe3e9', strokeWidth: 3, fill: { color: 'transparent', gradientType: "linear", gradientStops: [[0, 1], [50, 0.9], [100, 1]] } },
            labels: {
                offset: '88%',
                step: 20,
                visible: true,
                formatFunction: function (label) {
                    return label;
                }
            },
            marks: {
                colorRemaining: "#333",
                colorProgress: "#2db2e4",
                type: 'circle',
                offset: '75%',
                thickness: 2,
                size: '1%',
                majorSize: '2%',
                majorInterval: 10,
                minorInterval: 5
            },
            progressBar: {
                size: '70%',
                offset: '0%'
            },
            pointer: {
                type: 'line', thickness: 4, style: { fill: "#00a4e1", stroke: "#00a4e1" },
                size: '70%', offset: '0%'
            }
        }).on("change", function () {
            let k = $("#knob").val();
            //drawSSD(k);
            $("#val").text(k);
            window.dotNetHelper.invokeMethodAsync("SetDial", k);
        });
        $("#val").text($("#knob").val());
    }, 300);
}

function editorTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        aceEditor.setTheme("ace/theme/one_dark");
    else aceEditor.setTheme("ace/theme/sqlserver");
}

function getCurrentLine() {
    return aceEditor.getSelectionRange().start.row;
}

function getCurrentColumn() {
    return aceEditor.getSelectionRange().start.column;
}

function scrollToLine(n) {
    testVectorEditor.scrollToLine(n, true, true, function () { });
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

function clrscr() {
    XtermBlazor.getTerminalById(XtermBlazor._terminals.entries().next().value[0]).terminal.write("\x1bc");
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        //document.onmouseout = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function drawSSD(val) {
    let l = val.toString(2).padStart(8, '0').split('').map(x => Number.parseInt(x)).reverse();
    //console.log(l);
    if (dpl6)
        dpl6.tbl[0].draw_segm(l[0], l[2], l[5], l[6], l[4], l[1], l[3], 0);
}