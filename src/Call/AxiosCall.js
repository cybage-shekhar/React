import axios from 'axios';

export const loginCall = async({email, password}) => {
    try{
        const data = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
        return data;
  
      }catch(err){
        err.message="Server Failure";
        throw new Error(err);
      }
}

export const DashboardData = async() => {
  try{
      const data = await axios.get(`http://localhost:3001/blogs`);
      return data;

    }catch(err){
      err.message="Server Failure";
      throw new Error(err);
    }
}
export const PostData = async(userData) => {
  try{
      const data = await axios.post(`http://localhost:3001/users`,userData);
      return data;

    }catch(err){
      err.message="Server Failure";
      throw new Error(err);
    }
}