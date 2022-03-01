import actionTypes from "./editUser.actionTypes";

const EditUserSuccess = (successMessage) => ({
	type: actionTypes.EDIT_USER_SUCCESS,
	payload: successMessage,
});

const EditUserError = (errorMessage) => ({
	type: actionTypes.EDIT_USER_ERROR,
	payload: errorMessage,
});

const EditDataClear = () => ({
	type: actionTypes.EDIT_DATA_CLEAR,
});

export default {
	EditDataClear,
    EditUserError,
    EditUserSuccess,	
};