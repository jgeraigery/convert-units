var torsionalStiffness = {
  'Nm/rad': {
    name: {
      singular: 'Newton meter per radian',
      plural: 'Newton meters per radian',
    },
    to_anchor: 1,
  },
  'Nm/deg': {
    name: {
      singular: 'Newton meter per degree',
      plural: 'Newton meters per degree',
    },
    to_anchor: 57.2958,
  },
};

module.exports = {
  metric: torsionalStiffness,
  _anchors: {
    metric: {
      unit: 'Nm/rad',
      ratio: 1,
    },
  },
};
