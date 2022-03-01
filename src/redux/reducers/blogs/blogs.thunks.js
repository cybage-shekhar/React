import BlogsService from "../../../services/blogs.services";
import actions from "./blogs.actions";

export const loadBlogsAsync = () => (dispatch) => {
	dispatch(actions.blogsLoadStart());
	BlogsService.getAllBlogs()
		.then((response) => dispatch(actions.blogsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.blogsLoadError(error.message || "server failure")));
};