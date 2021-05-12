var brakeSpecificFuelConsumption = {
  'kg/Ws': {
    name: {
      singular: 'Kilogram per watt second',
      plural: 'Kilograms per watt second',
    },
    to_anchor: 1,
  },
  'g/kWh': {
    name: {
      singular: 'Gram per kilowatt hour',
      plural: 'Grams per kilowatt hour',
    },
    to_anchor: 2.778e-10,
  },
};

module.exports = {
  metric: brakeSpecificFuelConsumption,
  _anchors: {
    metric: {
      unit: 'kg/Ws',
      ratio: 1,
    },
  },
};
