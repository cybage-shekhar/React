import actionTypes from "./postUser.actionTypes";

const AddUserSuccess = (successMessage) => ({
	type: actionTypes.USER_ADD_SUCCESS,
	payload: successMessage,
});

const AddUserError = (errorMessage) => ({
	type: actionTypes.USER_ADD_ERROR,
	payload: errorMessage,
});

const AddUserClear = () => ({
	type: actionTypes.USER_ADD_CLEAR,
});

export default {
	AddUserClear,
    AddUserError,
    AddUserSuccess,	
};