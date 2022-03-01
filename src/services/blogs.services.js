import apiClient from "../helper/apiClients";

class BlogsService {
	getAllBlogs = () => apiClient().get("blogs");
}

export default new BlogsService();