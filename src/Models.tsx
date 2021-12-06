export interface Note {
    title: string;
    description: string;
};

export interface News {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
};

export interface Action {
    type: string;
    payload: any;
}