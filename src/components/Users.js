import React, { useEffect,useState } from 'react'
import axios from 'axios';
function Users() {
    const [users,setUsers]=useState([]);
    const [posts,setPosts]=useState([]);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
//ananim fonk.
     (async()=>{

        try {
            
            const {data:users}=await axios(
                "https://jsonplaceholder.typicode.com/users"
                )
                const {data:posts}=await axios(
                    `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
                    )
                setloading(false)
            setUsers(users)
            setPosts(posts)
            
        } 
        catch (error) {
            console.log(error)
        }


     })();//çağırdık

       

  },[]);

/*   //ananim fonk. tanımlama
  //1 yol
const loguser=()=>{
    loguser();
}
//2 yol
(()=>{}) */



  return (<div>

      <h2>Users</h2>
    
      {loading && <div>Loading...</div>}
      <ul>
        {
            users.map((users)=>(
                <li key={users.id}>{users.name}</li>
            ))
        }
      </ul>
     <h2>Post</h2> 
     <ul>
        {
            posts.map((post)=>(
                <li key={post.name}>{post.title}</li>
            ))
        }
      </ul>
  </div>
)

}

export default Users
