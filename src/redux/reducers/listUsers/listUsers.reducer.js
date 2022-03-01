import actionTypes from "./listUsers.actionTypes";
import initialState from "./listUsers.inintialState";

const listUsersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.USERLIST_LOAD_START:
			return {
				...state,
				isLoading: true,
				listUsers: null,
				errorMessage: null,
			};

		case actionTypes.USERLIST_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				listUsers: payload,
			};

		case actionTypes.USERLIST_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default listUsersReducer;