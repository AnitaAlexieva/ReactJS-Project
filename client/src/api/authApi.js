import { useEffect } from "react";
import request from "../utils/request";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify"; // Импортиране на toast

const baseUrl = 'https://reactjs-project-am7g.onrender.com/users';

export const useLogin = () => {
  const login = async (email, password) => {
    try {
      const result = await request.post(`${baseUrl}/login`, { email, password });
      return result;
    } catch (error) {
      toast.error(error.message || "Login failed! Please try again."); // Грешка при login
      throw error; // Прехвърляне на грешката за обработка на високо ниво
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
      toast.error(error.message || "Registration failed! Please try again."); // Грешка при регистрация
      throw error; // Прехвърляне на грешката за обработка на високо ниво
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
            userLogoutHandler(); // Извикваме userLogoutHandler след успешен logout
          } catch (error) {
            toast.error(error.message || "Logout failed! Please try again."); // Грешка при logout
          }
      };
  
      logoutRequest();
  
    }, [accessToken, userLogoutHandler]);

  return {
    isLoggedOut: !!accessToken, // Погрешно логнатите ще бъдат маркирани като не логнати
  };
};
