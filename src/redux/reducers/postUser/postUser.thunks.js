import PostUserService from "../../../services/postUser.services";
import actions from "./postUser.actions";

export const postUserAsync = (data) => (dispatch) => {
	PostUserService.addUser(data)
		.then((response) => dispatch(actions.AddUserSuccess(response.statusText)))
		.catch((error) => dispatch(actions.AddUserError(error.message || "server failure")));
};