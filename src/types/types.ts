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

export type People = {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
}