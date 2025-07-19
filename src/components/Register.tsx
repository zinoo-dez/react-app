import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import type { User } from '../types/type'
export default function Register() {
     const navigate = useNavigate()
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState<string | null>(null)
     const [user, setUser] = useState<User>({
          username: '',
          email: '',
          password: ''
     })

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // console.log(user);
          setLoading(true)
          setError(null)
          fetch('http://localhost:3007/api/auth/register', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    setLoading(false)
                    console.log(data)
                    navigate('/login')
               })
               .catch(error => {
                    setLoading(false)
                    setError(error.message)
               })

     }
     return (
          <div className="w-[400px] mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
               <h2 className="text-2xl font-bold mb-4">Register</h2>
               <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <input type="text" onChange={(e) => setUser({ ...user, username: e.target.value })} name='username' placeholder="Name" className="border border-gray-300 rounded-md p-2" />
                    <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} name='email' placeholder="Email" className="border border-gray-300 rounded-md p-2" />
                    <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} name='password' placeholder="Password" className="border border-gray-300 rounded-md p-2" />
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition" disabled={loading}>Register</button>
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    <p className="text-sm text-gray-600 mt-2">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
               </form>
          </div>
     )
}
