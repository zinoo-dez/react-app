import { jwtDecode } from "jwt-decode"; // npm i jwt-decode
import {
     createContext,
     useState,
     useEffect,
     useContext,
     type ReactNode,
} from "react";

interface AuthContextType {
     username: string;
     email: string;
     userId: string;
     setUser(username: string, email: string, userId: string): void;
     logout: () => void;
}
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
     // login user's data
     // get local storage token
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [userId, setUserId] = useState<string>("");

     useEffect(() => {
          const token = localStorage.getItem("token"); // get token from local storage(login user)
          if (token) {
               const decodedToken: any = jwtDecode(token);
               setUsername(decodedToken.username);
               setEmail(decodedToken.email);
               setUserId(decodedToken.userId);
          }
     }, []);


     // edit user's data
     const setUser = (username: string, email: string, userId: string) => {
          setUsername(username); //popo => "nono"
          setEmail(email); // "popo@gmail.com" => "nono@gmail.com"
          setUserId(userId); // 1 => 2
     };
     // logout user
     const logout = () => {
          localStorage.removeItem("token");
          setUsername("");
          setEmail("");
          setUserId("");
     };
     return (
          <AuthContext.Provider value={{ username, setUser, email, userId, logout }}>
               {children}
          </AuthContext.Provider>
     );
};
//custom hook
export const useAuth = () => {
     const context = useContext(AuthContext);
     if (!context) {
          throw new Error("useAuth must be used within a AuthProvider");
     }
     return context;
};
