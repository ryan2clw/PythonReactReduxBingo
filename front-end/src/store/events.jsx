/* The technical term for these events is actionTypes */
export const evnt = {
    /* Messaging system using bootstrap alerts */
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_DANGER',
    CLEAR: 'ALERT_CLEAR',
    /* Fill Board */
    CARD_REQUEST: 'CARD_REQUEST',
    CARD_SUCCESS: 'CARD_SUCCESS',
    CARD_FAILURE: 'CARD_FAILURE',
};

/* Global parsing and error handling for AJAX requests */
export const handleResponse = response => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}; 