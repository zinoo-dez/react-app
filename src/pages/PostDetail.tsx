import { useParams } from "react-router-dom";

export default function PostDetail() {
     const { id } = useParams();

     console.log(id);
     return (
          <div>
               <h1>PostDetail</h1>
               <p>{id}</p>
          </div>
     )
}
