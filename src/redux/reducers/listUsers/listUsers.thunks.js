import ListUsersService from "../../../services/listUsers.services";
import actions from "./listUsers.actions";

export const loadListUsersAsync = () => (dispatch) => {
	dispatch(actions.listUsersLoadStart());
	ListUsersService.getListUsers()
		.then((response) => dispatch(actions.listUsersLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.listUsersLoadError(error.message || "server failure")));
};