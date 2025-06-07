import { useState, useEffect } from "react"

type User = {
     name: string,
     age: number,
     email: string,
     phone?: string,
     website?: string,
     company?: {
          name: string,
          catchPhrase: string,
          bs: string
     },
     address?: {
          street: string,
          suite: string,
          city: string,
          zipcode: string,
          geo: {
               lat: string,
               lng: string
          }
     }

}
export default function About() {
     const [loading, setLoading] = useState<boolean>(true)
     const [error, setError] = useState<string | null>(null)
     const [users, setUsers] = useState<User[]>([])
     console.log(users)
     const [count, setCount] = useState<number>(100)
     const [name, setName] = useState<string>('')
     const fetchUsers = async () => {
          setLoading(true)
          await fetch('https://jsonplaceholder.typicode.com/users')
               .then(res => res.json())
               .then(data => setUsers(data))
               .catch(error => setError(error.message))
               .finally(() => setLoading(false))
     }
     useEffect(
          () => {
               fetchUsers()
               // setName("Rose")
               console.log('useEffect')
          }, [])

     // hooks
     // const app = useState(100)
     // const [users, setUsers] = useState<User>({
     //      name: '',
     //      age: 0,
     //      email: '',
     //      phone: ''
     // })
     // console.log('app', app)
     // count for state data
     // setCount for update state data
     // console.log('count', count)
     // console.log('setCount', setCount)
     function increment() {
          // setCount(count + 1)
          // setCount(count + 1)
          // setCount(count + 1)
          // setCount(count + 1)
          // setCount(count + 1)
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
     }
     function decrement() {
          setCount((prevCount) => prevCount - 1)
          setCount((prevCount) => prevCount - 1)
          setCount((prevCount) => prevCount - 1)
          setCount((prevCount) => prevCount - 1)
          setCount((prevCount) => prevCount - 1)
     }
     // function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
     //      setUsers({ ...users, name: e.target.value })
     // }
     // function handleChangeAge(e: React.ChangeEvent<HTMLInputElement>) {
     //      setUsers({ ...users, age: Number(e.target.value) })
     // }
     // function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
     //      setUsers({ ...users, email: e.target.value })
     // }
     // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
     //      setUsers(
     //           {
     //                ...users,
     //                [e.target.name]: e.target.value
     //           }
     //      )
     // }
     // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
     //      e.preventDefault()
     //      console.log(users)
     // }
     if (loading) {
          return <div>Loading...</div>
     }
     if (error) {
          return <div>Error: {error}</div>
     }
     return (
          <div className="min-h-screen">
               <h1>This is About</h1>
               <p>Count: {count}</p>
               <p>Name: {name}</p>
               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
               <br />
               {
                    users.length > 0 ? users.map((user, index) => (
                         <div key={index} className="border border-gray-300 p-4 rounded mb-4">
                              <p>Name: {user.name}</p>
                              <p>Email: {user.email}</p>
                              <p>Phone: {user.phone}</p>
                              <p>Website: {user.website}</p>
                              <p>Company Name: {user.company?.name}</p>
                              <p>Company CatchPhrase: {user.company?.catchPhrase}</p>
                              <p>Company Bs: {user.company?.bs}</p>
                              <p>Address Street: {user.address?.street}</p>
                              <p>Address Suite: {user.address?.suite}</p>
                              <p>Address City: {user.address?.city}</p>
                              <p>Address Zipcode: {user.address?.zipcode}</p>
                              <p>Address Geo Lat: {user.address?.geo?.lat}</p>
                              <p>Address Geo Lng: {user.address?.geo?.lng}</p>
                         </div>
                    )) : <p>No users found</p>
               }

               {/* <div>
                    <p>Name: {users.name}</p>
                    <p>Age: {users.age}</p>
                    <p>Email: {users.email}</p>
                    <p>Phone: {users.phone}</p>
               </div> */}
               {/* <form action="" className="p-4 border border-gray-300 rounded" onSubmit={handleSubmit}>
                    <input className="border border-gray-300 rounded px-2 py-1" type="text" value={users.name} name="name" onChange={handleChange} /> <br />
                    <input className="border border-gray-300 rounded px-2 py-1" type="number" value={users.age} name="age" onChange={handleChange} /> <br />
                    <input className="border border-gray-300 rounded px-2 py-1" type="email" value={users.email} name="email" onChange={handleChange} /> <br />
                    <input className="border border-gray-300 rounded px-2 py-1" type="number" value={users.phone} name="phone" onChange={handleChange} /> <br />
                    <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" value="Login" />
               </form> */}
               {/* <button onClick={() => setUsers({ name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' })}>Update User</button> */}
               <button className="bg-emerald-600 text-white px-4 py-2 rounded mr-2" onClick={increment}>Increment</button>
               <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={decrement}>Decrement</button>
          </div>
     )
}
