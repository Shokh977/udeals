'use client'
import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

const useStoreAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  token: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    const token = localStorage.getItem('token');

    if (!token) {
      set({ isCheckingAuth: false, isAuthenticated: false, user: null });
      return;
    }

    try {
      const res = await axios.get('/api/auth/check', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Set the full user data in Zustand store
      set({ user: res.data, isAuthenticated: true, token, isCheckingAuth: false });
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ isCheckingAuth: false, isAuthenticated: false, user: null });
    }
},

 

  signup: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post("/api/auth/signup", { name, email, password });
      localStorage.setItem("token", res.data.token); // Store token in local storage
      set({ user: res.data.user, isAuthenticated: true, token: res.data.token, isLoading: false });
      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      return false;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // Store token in local storage
      set({
        user: res.data.user,
        isAuthenticated: true,
        token: res.data.token,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post("/api/auth/logout"); 
      localStorage.removeItem("token");    
      set({
        user: null,
        isAuthenticated: false,
        token: null,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  },
  
}));

export default useStoreAuth;
