import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import React, { useRef, useState } from "react";



export default function PostForm({create}){
    const[post,setPost]= useState({title:"",body:""})//управляемы компонент
    //const bodyInputRef = useRef();// неуправляемый компонент

    const addNewPost=(e)=>{//при клике новый пост создается 
        e.preventDefault()
      const newPost={
        ...post, id: Date.now()
      }
      create(newPost);
       
      setPost({title:"",body:""})//обнуление инпута после добавления
      }

    return(
        <form>
        <MyInput type="text" placeholder="название поста" value={post.title} onChange={e=>setPost({...post, title:e.target.value})}
        />
        <MyInput type="text" placeholder="описание поста" value={post.body} onChange={e=>setPost({...post, body:e.target.value})}/>
        <MyButton onClick={addNewPost}> Создать пост</MyButton>
      </form>
    )
}