import GetUserService from "../../../services/getUser.services";
import actions from "./getUser.actions";

export const getUserAsync = (id) => (dispatch) => {
	dispatch(actions.getUserStart());
	GetUserService.getUser(id)
		.then((response) => dispatch(actions.getUserSuccess(response.data)))
		.catch((error) => dispatch(actions.getUserError(error.message || "server failure")));
};