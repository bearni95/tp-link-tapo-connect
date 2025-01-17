export declare const presetColours: {
    blue: {
        hue: number;
        saturation: number;
        color_temp: number;
    };
    red: {
        hue: number;
        saturation: number;
        color_temp: number;
    };
    yellow: {
        hue: number;
        saturation: number;
        color_temp: number;
    };
    green: {
        hue: number;
        saturation: number;
        color_temp: number;
    };
    white: {
        color_temp: number;
    };
    daylightwhite: {
        color_temp: number;
    };
};
export declare const hexToHsl: (hex: string) => void | {
    hue: any;
    saturation: any;
    brightness: number;
};
export declare const getColour: (colour: string) => any;
