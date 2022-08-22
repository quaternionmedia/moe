export const style = [
  {
    selector: 'node',
    style: {
      'background-color': '#483EE4',
    },
  },
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      'line-color': '#7937FA',
      'target-arrow-color': '#A634ED',
      width: 7,
    },
  },
  {
    selector: ':selected',
    style: {
      'background-color': '#D312F0',
      'line-color': '#D312F0',
    },
  },
  {
    selector: 'node[name]',
    style: {
      content: 'data(name)',
      color: '#fff',
      'text-wrap': 'wrap',
      'text-max-width': '10',
    },
  },
  {
    selector: 'edge[id]',
    style: {
      content: 'data(id)',
      color: '#fff',
      'text-wrap': 'wrap',
      'text-max-width': '10',
    },
  },

  // some style for the extension
  {
    selector: '.eh-handle',
    style: {
      'background-color': 'red',
      width: 12,
      height: 12,
      shape: 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12, // makes the handle easier to hit
      'border-opacity': 0,
    },
  },

  {
    selector: '.eh-hover',
    style: {
      'background-color': 'red',
    },
  },

  {
    selector: '.eh-source',
    style: {
      'border-width': 2,
      'border-color': 'red',
    },
  },

  {
    selector: '.eh-target',
    style: {
      'border-width': 2,
      'border-color': 'red',
    },
  },

  {
    selector: '.eh-preview, .eh-ghost-edge',
    style: {
      'background-color': 'red',
      'line-color': 'red',
      'target-arrow-color': 'red',
      'source-arrow-color': 'red',
    },
  },
  {
    selector: '.eh-ghost-edge.eh-preview-active',
    style: {
      opacity: 0,
    },
  },
  {
    selector: ':parent',
    style: {
      'background-color': '#444',
      opacity: 0.8,
    },
  },
  {
    selector: '.midi',
    style: {
      color: 'yellow',
    },
  },
  {
    selector: '.audio',
    style: {
      color: 'green',
    },
  },
]
