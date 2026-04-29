export type Node = {
    id: string;
    name: string;
    x: number;
    y: number;
    degree?: number;
};

export type Link = {
    source: string;
    target: string;
    color: string;
};
