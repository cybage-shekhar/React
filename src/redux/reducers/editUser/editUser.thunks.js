import EditUserService from "../../../services/editUser.services";
import actions from "./editUser.actions";

export const editUserAsync = (id,data) => (dispatch) => {
	EditUserService.editUser(id,data)
		.then((response) => dispatch(actions.EditUserSuccess(response.statusText)))
		.catch((error) => dispatch(actions.EditUserError(error.message || "server failure")));
};