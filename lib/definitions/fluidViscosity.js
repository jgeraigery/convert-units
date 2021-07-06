var fluidViscosity;

fluidViscosity = {
  "m2/s": {
    name: {
      singular: 'Square meter per second',
      plural: 'Squared meters per second',
    },
    to_anchor: 1,
  },
  "mm2/s": {
    name: {
      singular: 'Square millimeter per second',
      plural: 'Squared millimeters per second',
    },
    to_anchor: 1e-6,
  },
};

module.exports = {
  metric: fluidViscosity,
  _anchors: {
    metric: {
      unit: 'm2/s',
      ratio: 1,
    },
  },
};
