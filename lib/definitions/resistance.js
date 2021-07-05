var resistance;

resistance = {
  "Ohm": {
    name: {
      singular: 'Ohm',
      plural: 'Ohms',
    },
    to_anchor: 1,
  },
};

module.exports = {
  metric: resistance,
  _anchors: {
    metric: {
      unit: 'Ohm',
      ratio: 1,
    },
  },
};
