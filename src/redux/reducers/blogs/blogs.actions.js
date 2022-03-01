import actionTypes from "./blogs.actionTypes";

const blogsLoadStart = () => ({
	type: actionTypes.BLOGS_LOAD_START,
});

const blogsLoadSuccess = (blogs) => ({
	type: actionTypes.BLOGS_LOAD_SUCCESS,
	payload: blogs,
});

const blogsLoadError = (errorMessage) => ({
	type: actionTypes.BLOGS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	blogsLoadStart,
	blogsLoadSuccess,
	blogsLoadError,
};