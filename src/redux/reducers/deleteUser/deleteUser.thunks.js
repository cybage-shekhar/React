import DeleteUserService from "../../../services/deleteUser.services";
import actions from "./deleteUser.actions";

export const deleteUserAsync = (id) => (dispatch) => {
	DeleteUserService.deleteUser(id)
		.then((response) => dispatch(actions.DeleteUserSuccess(response.statusText)))
		.catch((error) => dispatch(actions.DeleteUserError(error.message || "server failure")));
};