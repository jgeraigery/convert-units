var capacitance;

capacitance = {
  "F": {
    name: {
      singular: 'Farad',
      plural: 'Farads',
    },
    to_anchor: 1,
  },
};

module.exports = {
  metric: capacitance,
  _anchors: {
    metric: {
      unit: 'F',
      ratio: 1,
    },
  },
};
