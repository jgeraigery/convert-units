var specificEnergy = {
  'Ws/kg': {
    name: {
      singular: 'Watt second per kilogram',
      plural: 'Watt seconds per kilogram',
    },
    to_anchor: 1,
  },
  'kWh/kg': {
    name: {
      singular: 'Kilowatt hour per kilogram',
      plural: 'Kilowatt hours per kilogram',
    },
    to_anchor: 3.6e6,
  },
};

module.exports = {
  metric: specificEnergy,
  _anchors: {
    metric: {
      unit: 'Ws/kg',
      ratio: 1,
    },
  },
};
