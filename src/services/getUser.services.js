import apiClient from "../helper/apiClients";

class GetUserService {
	getUser = (id) => apiClient().get(`person/${id}`);
}

export default new GetUserService();