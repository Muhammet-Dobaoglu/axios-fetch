import React, { useEffect,useState } from 'react'
import axios from 'axios';
function Users() {
    const [users,setUsers]=useState([]);
    const [posts,setPosts]=useState([]);
    const [loading,setloading]=useState(true);
    useEffect(()=>{

        /*         //istek atıyoruz
        fetch("https://jsonplaceholder.typicode.com/users")
        //then ile istek tamaladığında bilgi sahibi oluyoruz
        .then((res)=>res.json())
        //res.json data dönücek
        .then((data)=>setUsers(data))
        .finally(()=>setloading(false)) */
        //2 yol:
      /*   npm i install axios
özellikleri
1)durdurabiliriz
2) json çevirmek otomatik olur. */

    /*     axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
        setUsers(res.data);
            axios(
                `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
            ).then((res)=>setPosts(res.data));
             })
        .finally(()=>setloading(false)) ;
     },[]); */
  getData();
  },[]);
  //async tanımlamamnın nedeni await  anahtar sözcüğü kullanabilmek
  const getData=async()=>{
    //işlem bitsin sonra alt satıra geç
   const {data:users}=await axios(
    "https://jsonplaceholder.typicode.com/users"
    )
    const {data:posts}=await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
        )
setUsers(users)
setPosts(posts)


  }
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
