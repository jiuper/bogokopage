import {StaticImageData} from "next/image";

export interface IROUTES {
    title: string;
    href: string;
    context?: boolean;
    classPrefix?: string;
    label?: string;
}

export interface ICAROUSELCHILDREN {
    label: string;
    desc: string;
    icon: StaticImageData;
    alt: string;
    title: string;
    age: string;
}

export interface IGroupImages {
    icon: StaticImageData,
    alt: string
}
