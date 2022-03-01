import actionTypes from "./blogs.actionTypes";
import initialState from "./blogs.initialState";

const blogsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.BLOGS_LOAD_START:
			return {
				...state,
				isLoading: true,
				blogs: null,
				errorMessage: null,
			};

		case actionTypes.BLOGS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				blogs: payload,
			};

		case actionTypes.BLOGS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default blogsReducer;