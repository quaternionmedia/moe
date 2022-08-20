import m from 'mithril'
import { Layout } from './Menu'
import { Graph } from './cy'
import './style.css'


export function Button() {
    return {
        view: vnode => {
            return m('input[type=submit].button', vnode.attrs, vnode.children)
        }
    }
}

export function Home() {
    return {
        view: vnode => {
            return m('moe')
        }
    }
}


m.route(document.body, "/", {
    '/': { render: () => m(Layout, m(Home)) },
    '/graph': { render: () => m(Layout, m(Graph)) },
})