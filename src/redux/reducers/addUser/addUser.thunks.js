import AddUserService from "../../../services/addUser.services";
import actions from "./addUser.actions";

export const addUserAsync = (data) => (dispatch) => {
	AddUserService.postUser(data)
		.then((response) => dispatch(actions.UserPostSuccess(response.statusText)))
		.catch((error) => dispatch(actions.UserPostError(error.message || "server failure")));
};