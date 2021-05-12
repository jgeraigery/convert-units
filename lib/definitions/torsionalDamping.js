var torsionalDamping = {
  'Nms/rad': {
    name: {
      singular: 'Newton meter second per radian',
      plural: 'Newton meter seconds per radian',
    },
    to_anchor: 1,
  },
  'Nms/deg': {
    name: {
      singular: 'Newton meter second per degree',
      plural: 'Newton meter seconds per degree',
    },
    to_anchor: 57.2958,
  },
};

module.exports = {
  metric: torsionalDamping,
  _anchors: {
    metric: {
      unit: 'Nms/rad',
      ratio: 1,
    },
  },
};
