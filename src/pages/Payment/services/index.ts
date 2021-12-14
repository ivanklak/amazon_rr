import axios from "axios";

export const instance = axios.create({
    baseURL: ''
});

export const paymentAPI = {
    getClientSecret(total: number) {
        return instance.post(`/payments/create?total=${total}`)
    }
};