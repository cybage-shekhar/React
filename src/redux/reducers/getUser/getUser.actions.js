import actionTypes from "./getUser.actionTypes";

const getUserStart = () => ({
	type: actionTypes.GET_USER_START,
});

const getUserSuccess = (user) => ({
	type: actionTypes.GET_USER_SUCCESS,
	payload: user,
});

const getUserError = (errorMessage) => ({
	type: actionTypes.GET_USER_ERROR,
	payload: errorMessage,
});

export default {
	getUserError,
    getUserStart,
    getUserSuccess,
};