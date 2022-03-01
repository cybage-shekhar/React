import { combineReducers } from "redux";
import blogsReducer from "./blogs/blogs.reducer";
import addUserReducer from "./addUser/addUser.reducer";
import listUsersReducer from "./listUsers/listUsers.reducer";
import postUserReducer from "./postUser/postUser.reducer";
import deleteUserReducer from "./deleteUser/deleteUser.reducer";
import editUserReducer from "./editUser/editUser.reducer";
import getUserReducer from "./getUser/getUser.reducer";

const rootReducer = () =>
	combineReducers({
		blogs: blogsReducer,
		addUser: addUserReducer,
		listUsers: listUsersReducer,
		postUser: postUserReducer,
		deleteUser: deleteUserReducer,
		editUser: editUserReducer,
		getUser: getUserReducer,
	});

export default rootReducer;