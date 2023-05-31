import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  // Create a new Axios instance
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
  });

  useEffect(() => {
    // Add a request interceptor
    axiosSecure.interceptors.request.use(
      (config) => {
        // Get the token from local storage
        const token = localStorage.getItem('access-token');
        if (token) {
          // Add the authorization header to the request
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Perform async logout and navigate to login
          (async () => {
            await logOut();
            navigate('/login');
          })();
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOut, axiosSecure.interceptors.request, axiosSecure.interceptors.response]);

  return [axiosSecure];
};

export default useAxiosSecure;
