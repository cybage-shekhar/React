import actionTypes from "./postUser.actionTypes";
import initialState from "./postUser.initialState";

const postUserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.USER_ADD_SUCCESS:
			return {
				...state,
				successMessage: payload,
			};

		case actionTypes.USER_ADD_ERROR:
			return {
				...state,
				errorMessage: payload,
			};
		case actionTypes.USER_ADD_CLEAR:
			return{
				...state,
				successMessage: null,
				errorMessage: null,
			}
		default:
			return state;
	}
};

export default postUserReducer;