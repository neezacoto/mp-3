export type RGB = {
    red: number;
    green: number;
    blue: number;
}

export type HSV = {
    hue: number;
    saturation: number;
    value: number;
}

export type HTML = string;


export type Color = {
    numComments: number;
    numHearts: number;
    rank: number;
    dateCreated: string;
    hex: string;
    rgb: RGB;
    hsv: HSV;
    description: HTML;
    url: URL;
    imageURL: URL;
    badgeURL: URL;
    apiURL: URL;
}