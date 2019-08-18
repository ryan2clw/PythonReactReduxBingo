import { handleResponse } from '../store/events';

export const getCards = async () => {
    const requestOptions = {
        method: 'GET'
    };
    const uri = "http://localhost:8000/cards";
    return fetch(uri, requestOptions)
        .then(handleResponse)
        .then(cards => cards);
}