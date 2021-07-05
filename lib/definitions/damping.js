var damping;

damping = {
  'Ns/m': {
    name: {
      singular: 'Newton second per meter',
      plural: 'Newton seconds per meter',
    },
    to_anchor: 1,
  },
};

module.exports = {
  metric: damping,
  _anchors: {
    metric: {
      unit: 'Ns/m',
      ratio: 1,
    },
  },
};
