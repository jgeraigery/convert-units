var torqueConversionFactor = {
    'Nms2/rad2': {
      name: {
        singular: 'Newton meter square second per square radian',
        plural: 'Newton meter square seconds per square radian',
      },
      to_anchor: 1,
    },
  };
  
  module.exports = {
    metric: torqueConversionFactor,
    _anchors: {
      metric: {
        unit: 'Nms2/rad2',
        ratio: 1,
      },
    },
  };
  