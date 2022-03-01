import apiClient from "../helper/apiClients";

class ListUsersService {
	getListUsers = () => apiClient().get("person");
}

export default new ListUsersService();