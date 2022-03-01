import actionTypes from "./deleteUser.actionTypes";
import initialState from "./deleteUser.initialState";

const deleteUserReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.DELETE_SUCCESS:
			return {
				...state,
				deleteSuccessMessage: payload,
			};
		case actionTypes.DELETE_ERROR:
			return {
				...state,
				deleteErrorMessage: payload,
			};
			case actionTypes.DELETE_CLEAR:
				return{
					...state,
					deleteSuccessMessage:null,
					deleteErrorMessage: null,
				};
		default:
			return state;
	}
};

export default deleteUserReducer;