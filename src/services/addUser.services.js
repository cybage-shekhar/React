import apiClient from "../helper/apiClients";

class AddUserService {
	postUser = (data) => apiClient().post("users",data);
}

export default new AddUserService();