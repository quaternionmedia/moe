import { cy } from './cy'

export var clickedNodes

export var Gui = {
    grid: 100,
    r: 100,
    w: window.innerWidth,
    h: window.innerHeight
}

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2

export function testPosition() {
    cy.nodes().positions(function(node, i) {
        return {
            x: i * Gui.grid,
            y: Gui.grid
        }

    })
}


export function orderRadially(col = cy.nodes(), r = Gui.r, xc = Gui.w / 2, yc = Gui.h / 2) {
    let len = col.length
    col.positions(function(node, i) {
        let theta = map(i, 0, len, 0, 2 * Math.PI)
        console.log(theta, Gui)
        return {
            x: xc + r * Math.cos(theta),
            y: yc + r * Math.sin(theta)
        }
    })
}