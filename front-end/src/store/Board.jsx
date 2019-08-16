// import { evnt } from './events';
// import { numberService } from '../webservices/numberService';
// import { danger } from './Message';
// export const actionCreators = {
//     requestNumbers: (cardCount = 1, cards = []) => async (dispatch) => {
//         function request(cardCount, cards) { return { type: evnt.BOARD_REQUEST, cardCount, cards } }
//         function success(cards) { return { type: evnt.BOARD_SUCCESS, cards } }
//         function failure(error) { return { type: evnt.BOARD_FAILURE, error } }
//         dispatch(request(cardCount, cards));
//         numberService.card(cardCount)
//             .then(
//                 cards => {
//                     return dispatch(success(cards));
//                 },
//                 error => {
//                     dispatch(failure(evnt.NUMBERS_FAILURE, error.toString()));
//                     dispatch(danger(error.toString())); // sends error to the UI, alert messages at top of page
//                 }
//             );
//     }
// };
// /* Reducers map actions to state, set the default state to an initial value */
// export const gamesReducer = (state = { games: [], isLoading: false }, action) => {
//     switch (action.type) {
//         case evnt.BOARD_REQUEST:
//             return {
//                 games: action.cards,
//                 cardCount: action.cardCount
//             };
//         case evnt.BOARD_SUCCESS:
//             {
//                 /* Successful API call so update dynamic data: state.whatever = action.whatever */
//                 return {
//                     cardCount: action.cardCount,
//                     games: action.cards
//                 };
//             }
//         case evnt.BOARD_FAILURE:
//             return {
//                 error: action.error
//             };
//         default:
//             return state;
//     }
// };

