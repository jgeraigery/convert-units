var pressureForceRatio = {
  'Pa/N': {
    name: {
      singular: 'Pascal per newton',
      plural: 'Pascals per newton',
    },
    to_anchor: 1,
  },
  'bar/N': {
    name: {
      singular: 'Bar per newton',
      plural: 'Bar per newton',
    },
    to_anchor: 1e5,
  },
};

module.exports = {
  metric: pressureForceRatio,
  _anchors: {
    metric: {
      unit: 'Pa/N',
      ratio: 1,
    },
  },
};
