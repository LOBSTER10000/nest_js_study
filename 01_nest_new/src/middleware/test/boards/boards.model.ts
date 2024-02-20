export interface Board {
    id: string;
    password : string;
    title : string;
    content : string;
    status : BoardStatus;
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}