import actionTypes from "./addUser.actionTypes";
import initialState from "./addUser.initialState";

const addUserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.USER_POST_SUCCESS:
			return {
				...state,
				successMessage: payload,
			};

		case actionTypes.USER_POST_ERROR:
			return {
				...state,
				errorMessage: payload,
			};
		case actionTypes.USER_DATA_CLEAR:
			return{
				...state,
				successMessage: null,
				errorMessage: null,
			}
		default:
			return state;
	}
};

export default addUserReducer;