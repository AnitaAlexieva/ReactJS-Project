import { useEffect } from "react";
import request from "../utils/request";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";

const baseUrl = 'https://reactjs-project-am7g.onrender.com/users';

export const useLogin = () => {
  const login = async (email, password) => {
    try {
      const result = await request.post(`${baseUrl}/login`, { email, password });
      return result;
    } catch (error) {
      toast.error(error.message || "Login failed! Please try again.");
      throw error;
    }
  };

  return {
    login,
  };
};

export const useRegister = () => {
  const register = async (username, email, password) => {
    try {
      const result = await request.post(`${baseUrl}/register`, { username, email, password });
      return result;
    } catch (error) {
      toast.error(error.message || "Registration failed! Please try again.");
      throw error;
    }
  };

  return {
    register,
  };
};

export const useLogout = () => {
  const { accessToken, userLogoutHandler } = useUserContext();

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const options = {
      headers: {
        'X-Authorization': accessToken,
      },
    };

    const logoutRequest = async () => {
      try {
        await request.get(`${baseUrl}/logout`, null, options);
        userLogoutHandler();
      } catch (error) {
        toast.error(error.message || "Logout failed! Please try again.");
      }
    };

    logoutRequest();

  }, [accessToken, userLogoutHandler]);

  return {
    isLoggedOut: !!accessToken,
  };
};
