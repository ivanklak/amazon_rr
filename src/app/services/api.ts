import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

export enum ResultCodes {
    Success = 0,
    Error = 1,
}