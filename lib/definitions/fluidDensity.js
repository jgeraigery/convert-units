var fluidDensity;

fluidDensity = {
  "kg/m3": {
    name: {
      singular: 'Kilogram per meter cubed',
      plural: 'Kilograms per meter cubed',
    },
    to_anchor: 1,
  },
  "kg/l": {
    name: {
      singular: 'Kilogram per litre',
      plural: 'Kilograms per litre',
    },
    to_anchor: 1000,
  },
};

module.exports = {
  metric: fluidDensity,
  _anchors: {
    metric: {
      unit: 'kg/m3',
      ratio: 1,
    },
  },
};
