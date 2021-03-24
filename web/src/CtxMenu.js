import { cy } from './Graph'
import render from 'mithril-node-render'
import m from 'mithril'
import { newNode } from './Moe'

export var menuOptions = {
					selector: 'node, edge',

					commands: [
						{
							content: render.sync(m('.material-icons', {}, 'filter_b_and_w')),
							select: function(ele){
								console.log( ele.id() );
							},
						},

						{
							content: render.sync(m('.material-icons', {}, 'swap_horiz')),
							select: function(ele){
								console.log( ele.data('name') );
							},
						},

						{
							content: render.sync(m('.material-icons', {}, 'miscellaneous_services')),
							select: function(ele){
								console.log( ele.data('io') );
							},
						},

						{
							content: render.sync(m('.material-icons', {}, 'mode_edit')),
							select: function(ele){
								console.log( 'clicked',  ele.data());
                cy.add(newNode('null'))
							},
							enabled: true

						}
					]
				}
