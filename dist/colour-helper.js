"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColour = exports.hexToHsl = exports.presetColours = void 0;
exports.presetColours = {
    blue: {
        hue: 240,
        saturation: 100,
        color_temp: 0
    },
    red: {
        hue: 0,
        saturation: 100,
        color_temp: 0
    },
    yellow: {
        hue: 60,
        saturation: 100,
        color_temp: 0
    },
    green: {
        hue: 120,
        saturation: 100,
        color_temp: 0
    },
    white: {
        color_temp: 4500
    },
    daylightwhite: {
        color_temp: 5500
    }
};
var hexToHsl = function (hex) {
    if (hex.toLowerCase() === '#000000')
        return console.error('Cannot set light to black');
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);
    return {
        hue: h,
        saturation: s,
        brightness: l
    };
};
exports.hexToHsl = hexToHsl;
var getColour = function (colour) {
    colour = colour.toLowerCase();
    if (colour.startsWith('#'))
        return exports.hexToHsl(colour);
    if (Object.keys(exports.presetColours).includes(colour))
        return exports.presetColours[colour];
    throw new Error('Invalid Colour');
};
exports.getColour = getColour;
//# sourceMappingURL=colour-helper.js.map