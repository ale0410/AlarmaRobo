
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-device-motion.Acceleration",
          "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
          "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
          "Acceleration"
        ]
        },
      {
          "id": "cordova-plugin-device-motion.accelerometer",
          "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
          "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
          "navigator.accelerometer"
        ]
        },
      {
          "id": "cordova-plugin-flashlight.Flashlight",
          "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
          "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
          "window.plugins.flashlight"
        ]
        },
      {
          "id": "cordova-plugin-vibration.notification",
          "file": "plugins/cordova-plugin-vibration/www/vibration.js",
          "pluginId": "cordova-plugin-vibration",
        "merges": [
          "navigator"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-device-motion": "2.0.1",
      "cordova-plugin-flashlight": "3.2.0",
      "cordova-plugin-vibration": "3.1.1"
    };
    // BOTTOM OF METADATA
    });
    