import { create } from "zustand";
import axios from "axios";


axios.defaults.withCredentials = true;

 const useStoreAuth =  create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post("/api/auth/signup",
        {
          email,
          password,
          name,
        },
        { withCredentials: true }
      );
      set({ user: res.data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({
        // error: res.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },



  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const res = await axios.get(`${API_URL}/api/auth/check-auth`, {
        withCredentials: true,
      });
      set({
        user: res.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(
        "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      set({
        user: res.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post("/api/auth/logout");
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.res?.data?.message || "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  },
}));

export default useStoreAuth