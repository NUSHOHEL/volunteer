import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const {register, handleSubmit } = useForm();
const [image, setImage]=useState(null);



  const onSubmit = data => {
      console.log(data)
      const eventData = {
          name: data.name,
          image:image
      }
      const url =`http://localhost:8080/addevents`;
      fetch(url,{
          method:'POST',
          headers:{
                'content-type':'application/json'
          },
          body:JSON.stringify(eventData)
      })


      .then(res=>console.log('server side response ',res) ) 
    };
//   console.log(watch("example"));

  const handleImage = (e)=>{
      console.log(e.target.files[0]);
      const imageData = new FormData();
      imageData.set('key','ec5df63c40b68c2c294edde73f94d744');
      imageData.append('image',e.target.files[0])

      axios.post
      ('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="event name" ref={register}/> <br/>
      <input type="file" name="exampleRequired" onChange={handleImage} /> <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddEvents;