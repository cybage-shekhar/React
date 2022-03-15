import actionTypes from "./editUser.actionTypes";
import initialState from "./editUser.initialState";

const editUserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.EDIT_USER_SUCCESS:
			return {
				...state,
				editSuccessMessage: payload,
				editErrorMessage: null,
			};

		case actionTypes.EDIT_USER_ERROR:
			return {
				...state,
				editErrorMessage: payload,
				editSuccessMessage: null,
			};
		case actionTypes.EDIT_DATA_CLEAR:
			return{
				...state,
				editSuccessMessage: null,
				editErrorMessage: null,
			}
		default:
			return state;
	}
};

export default editUserReducer;