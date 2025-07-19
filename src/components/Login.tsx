import { Link, useNavigate } from "react-router-dom";
import type { User } from "../types/type";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/authContext";

export default function Login() {
     const { setUser } = useAuth()
     const navigate = useNavigate()
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState<string | null>(null)
     const [users, setUsers] = useState<User>({
          username: '',
          email: '',
          password: '',
          userId: ''
     })
     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setLoading(true)
          setError(null)
          fetch('http://localhost:3007/api/auth/login', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(users)
          })
               .then(res => res.json())
               .then(data => {
                    setLoading(false)
                    // console.log(data)
                    const { token } = data
                    localStorage.setItem('token', token)
                    const decodedToken = jwtDecode<User>(
                         token
                    );
                    console.log("after decoded", decodedToken); // check decoded token
                    const { username, email, userId } = decodedToken;
                    console.log("username", username);
                    console.log("email", email);
                    console.log("userId", userId);
                    setUser(username, email, userId as string);
                    navigate('/')
               })
               .catch(error => {
                    setLoading(false)
                    setError(error.message)
               })
     }
     return (
          <div className="w-[400px] mx-auto my-10 p-6 border border-gray-300 rounded-md shadow-md">
               <h2 className="text-2xl font-bold mb-4">Login</h2>
               <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input type="email" onChange={(e) => setUsers({ ...users, email: e.target.value })} name='email' placeholder="Email" className="border border-gray-300 rounded-md p-2" />
                    <input type="password" onChange={(e) => setUsers({ ...users, password: e.target.value })} name='password' placeholder="Password" className="border border-gray-300 rounded-md p-2" />
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition">Login</button>
                    <p className="text-sm text-gray-600 mt-2">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
               </form>
          </div>
     )
}
