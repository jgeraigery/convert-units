var lineVolume;

lineVolume = {
  'Pa/m3': {
    name: {
      singular: 'Pascal per cubic meter',
      plural: 'Pascals per cubic meter',
    },
    to_anchor: 1,
  },
  'bar/cm3': {
    name: {
      singular: 'Bar per cubic centimeter',
      plural: 'Bars per cubic centimeter',
    },
    to_anchor: 1e11,
  },
};

module.exports = {
  metric: lineVolume,
  _anchors: {
    metric: {
      unit: 'Pa/m3',
      ratio: 1,
    },
  },
};
