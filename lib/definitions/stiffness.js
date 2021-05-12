var stiffness = {
  'N/m': {
    name: {
      singular: 'Newton per meter',
      plural: 'Newtons per meter',
    },
    to_anchor: 1,
  },
  'N/mm': {
    name: {
      singular: 'Newton per millimeter',
      plural: 'Newtons per millimeter',
    },
    to_anchor: 1000,
  },
  'kgf/m': {
    name: {
      singular: 'Kilogram force per meter',
      plural: 'Kilograms force per meter',
    },
    to_anchor: 9.80665,
  },
};

module.exports = {
  metric: stiffness,
  _anchors: {
    metric: {
      unit: 'N/m',
      ratio: 1,
    },
  },
};
