var frictionRatio = {
  'N/Pa': {
    name: {
      singular: 'Newton per Pascal',
      plural: 'Newtons per Pascal',
    },
    to_anchor: 1,
  },
  'N/bar': {
    name: {
      singular: 'Newton per bar',
      plural: 'Newtons per bar',
    },
    to_anchor: 1e-5,
  },
};

module.exports = {
  metric: frictionRatio,
  _anchors: {
    metric: {
      unit: 'N/Pa',
      ratio: 1,
    },
  },
};
