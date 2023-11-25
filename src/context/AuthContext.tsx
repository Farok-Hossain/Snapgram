import { IContextType } from "@/types";

export const INITIAL_USER = {
  id: "",
  name: "",
  userName: "",
  email: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_SATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_SATE);

const AuthContext = () => {
  return <div></div>;
};

export default AuthContext;
