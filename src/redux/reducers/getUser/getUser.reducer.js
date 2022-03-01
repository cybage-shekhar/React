import actionTypes from "./getUser.actionTypes";
import initialState from "./getUser.initialState";

const getUserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.GET_USER_START:
			return {
				...state,
				isLoading: true,
				user: null,
				errorMessage: null,
			};

		case actionTypes.GET_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				user: payload,
			};

		case actionTypes.GET_USER_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default getUserReducer;