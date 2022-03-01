import apiClient from "../helper/apiClients";

class PostUserService {
	addUser = (data) => apiClient().post("person",data);
}

export default new PostUserService();