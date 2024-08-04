  import axios from "axios";

  axios.defaults.baseURL = 'https://deploy-marek-b05855e6af89.herokuapp.com/api/v1';


const register = async (data) => {
  
  try {
    const res = await axios.post('/users/signup', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
}

const login = async (loginData) => {
  const {email}=loginData
  try {
    const res = await axios.post('/users/login', loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const token=(res.data.data.token)
    const cookieData = `${email}=${token}`
    document.cookie=cookieData
    return res.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
}

  export default { register, login};
