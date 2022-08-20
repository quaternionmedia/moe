import { state } from "./state"

state.cy = {
    elements: [],

    layout: { name: 'grid' /* , ... */ },
    data: {},

    // initial viewport state:
    zoom: 1,
    pan: { x: 100, y: 100 },

    // interaction options:
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: true,
    userZoomingEnabled: true,
    panningEnabled: true,
    userPanningEnabled: true,
    boxSelectionEnabled: true,
    selectionType: 'single',
    touchTapThreshold: 8,
    desktopTapThreshold: 4,
    autolock: false,
    autoungrabify: false,
    autounselectify: false,
    multiClickDebounceTime: 250,

    // rendering options:
    headless: false,
    styleEnabled: true,
    hideEdgesOnViewport: false,
    textureOnViewport: false,
    motionBlur: false,
    motionBlurOpacity: 0.5,
    // wheelSensitivity: 1,
    pixelRatio: 'auto'
}