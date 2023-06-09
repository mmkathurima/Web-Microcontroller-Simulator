import Color from 'color';
import {v1 as uuidv1} from 'uuid';
import ColorHash from 'color-hash';

const colorHash = new ColorHash();
export const genID = () => uuidv1();
export const mapText2Color = (txt) => colorHash.hex(txt);
export var ObjectEvent;
(function (ObjectEvent) {
    ObjectEvent["MouseOut"] = "mouseout";
    ObjectEvent["MouseOver"] = "mouseover";
    ObjectEvent["MouseDown"] = "mousedown";
    ObjectEvent["MouseUp"] = "mouseup";
    ObjectEvent["MouseDoubleClick"] = "mousedblclick";
    ObjectEvent["Moving"] = "moving";
})(ObjectEvent || (ObjectEvent = {}));
export const ELEMENT_EVENTS = {
    stateMachineChange: 'statemachine:change',
    state: {
        click: 'state:click',
        rightClick: 'state:rightclick',
        over: 'state:over',
        out: 'state:out',
        doubleClick: 'state:doubleclick',
    },
    transition: {
        click: 'transition:click',
        rightClick: 'transition:rightclick',
        over: 'transition:over',
        out: 'transition:out',
        doubleClick: 'transition:doubleclick',
    },
    canvas: {
        click: 'canvas:click',
        rightClick: 'canvas:rightclick',
        doubleClick: 'canvas:doubleclick',
    },
};
export const EDITOR_DEFAULTS = {
    stateFill: new Color('#180019'),
    stateStroke: new Color('#C5CBD3'),
    initialStateStroke: new Color('orange'),
    currentStateFill: new Color('#400042'),
    textStroke: new Color('white'),
    backgroundColor: new Color('rgba(131,85,131,0.84)'),
    selectionColor: new Color(),
    selfLinkHeight: 100,
    stateRadius: 30,
    maxZoom: 2,
    minZoom: 0.1,
    selectableStates: true,
};
