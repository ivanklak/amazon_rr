import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:5001/amzn-1-294eb/us-central1/api'
});

export const paymentAPI = {
    getClientSecret(total: number) {
        return instance.post(`/payments/create?total=${total}`);
    }
};