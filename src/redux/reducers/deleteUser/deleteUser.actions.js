import actionTypes from "./deleteUser.actionTypes";

const DeleteUserSuccess = (successMessage) => ({
	type: actionTypes.DELETE_SUCCESS,
	payload: successMessage,
});

const DeleteUserError = (errorMessage) => ({
	type: actionTypes.DELETE_ERROR,
	payload: errorMessage,
});

const DeleteUserClear = (errorMessage) => ({
	type: actionTypes.DELETE_CLEAR,
});


export default {
	DeleteUserError,
    DeleteUserSuccess,
	DeleteUserClear,	
};