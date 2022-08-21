import { cy } from './Graph'
import render from 'mithril-node-render'
import m from 'mithril'
import { newNode, newEdge } from './Moe'

export function node() {
  //create new node to represent this edit
  cy.add(newNode('new node'))
  console.log('edit ran')
}

export function edge() {
  cy.add(newEdge(0, 1))
  console.log('edge ran')

  // cy.add(newNode('config'))
  // console.log('config ran')
}

export function graph() {
  //query selected collection

  //create node to represent abstraction result
  // cy.add(newNode('abstraction'))

  console.log('abstract ran')
}

export var menuOptions = {
  selector: 'node, edge',

  commands: [
    {
      content: render.sync(m('.material-icons', {}, 'filter_b_and_w')),
      select: function (ele) {
        // console.log( 'abstract clicked' )
        node()
      },
    },

    {
      content: render.sync(m('.material-icons', {}, 'miscellaneous_services')),
      select: function (ele) {
        // console.log('config clicked');
        edge()
      },
    },

    {
      content: render.sync(m('.material-icons', {}, 'mode_edit')),
      select: function (ele) {
        // console.log('edit clicked')
        graph()
      },
      enabled: true,
    },
  ],
}
