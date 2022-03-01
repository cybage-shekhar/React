import actionTypes from "./addUser.actionTypes";

const UserPostSuccess = (successMessage) => ({
	type: actionTypes.USER_POST_SUCCESS,
	payload: successMessage,
});

const UserPostError = (errorMessage) => ({
	type: actionTypes.USER_POST_ERROR,
	payload: errorMessage,
});

const UserDataClear = () => ({
	type: actionTypes.USER_DATA_CLEAR,
});

export default {
	UserPostSuccess,
    UserPostError,
	UserDataClear,	
};