import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://us-central1-amzn-1-294eb.cloudfunctions.net/api'
});

export const paymentAPI = {
    getClientSecret(total: number) {
        return instance.post(`/payments/create?total=${total}`);
    }
};