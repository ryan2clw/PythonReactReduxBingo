import { evnt } from './events';

/* Message Actions */

export const success = (message) => ({ type: evnt.SUCCESS, message });
export const danger = (message) => ({ type: evnt.ERROR, message });
export const clear = () => ({ type: evnt.CLEAR });

/* Message Reducer */

export const messageReducer = (state = {}, action) => {
    switch (action.type) {
        case evnt.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case evnt.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case evnt.CLEAR:
            return {};
        default:
            return state
    }
}