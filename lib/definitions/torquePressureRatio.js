var torquePressureRatio = {
  'Nm/Pa': {
    name: {
      singular: 'Newton meter per pascal',
      plural: 'Newton meters per pascal',
    },
    to_anchor: 1,
  },
  'Nm/bar': {
    name: {
      singular: 'Newton meter per bar',
      plural: 'Newton meters per bar',
    },
    to_anchor: 1e-5,
  },
};

module.exports = {
  metric: torquePressureRatio,
  _anchors: {
    metric: {
      unit: 'Nm/Pa',
      ratio: 1,
    },
  },
};
