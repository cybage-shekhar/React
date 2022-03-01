import actionTypes from "./listUsers.actionTypes";

const listUsersLoadStart = () => ({
	type: actionTypes.USERLIST_LOAD_START,
});

const listUsersLoadSuccess = (listUsers) => ({
	type: actionTypes.USERLIST_LOAD_SUCCESS,
	payload: listUsers,
});

const listUsersLoadError = (errorMessage) => ({
	type: actionTypes.USERLIST_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	listUsersLoadStart,
    listUsersLoadSuccess,
    listUsersLoadError,
};