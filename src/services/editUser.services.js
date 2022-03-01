import apiClient from "../helper/apiClients";

class EditUserService {
	editUser = (id,data) => apiClient().patch(`person/${id}`,data);
}

export default new EditUserService();