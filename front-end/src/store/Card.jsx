import { evnt } from './events';
import { getCards } from '../webservices/bingoService';
import { danger } from './Message';

export const actionCreators = {
    requestNumbers: (cardCount=1, cards = []) => async (dispatch) => {
        function request(cardCount, cards) { return { type: evnt.CARD_REQUEST, cardCount, cards } }
        function success(cards) {  return {  type: evnt.CARD_SUCCESS, cards } }
        function failure(error) { return { type: evnt.CARD_FAILURE, error } }
        dispatch(request(cardCount, cards));
        getCards(cardCount)
            .then(
                cards => {
                    return dispatch(success(cards));
                },
                error => {
                    dispatch(failure(evnt.CARD_FAILURE, error.toString()));
                    dispatch(danger(error.toString())); // sends error to the UI, alert messages at top of page
                }
            );
    }
};
/* Reducers map actions to state, set the default here */
export const cardReducer = (state = { cards: [], cardCount: 0 }, action) => {
    switch (action.type) {
        case evnt.CARD_REQUEST:
            return {
                cards: action.cards,
                cardCount: action.cardCount,
            };
        case evnt.CARD_SUCCESS:
        {
            /* Successful API call so update dynamic data: state.whatever = action.whatever */
            return {
                cards: action.cards
            };
        }
        case evnt.CARD_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
};