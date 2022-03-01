import apiClient from "../helper/apiClients";

class DeleteUserService {
	deleteUser = (id) => apiClient().delete(`person/${id}`);
}

export default new DeleteUserService();