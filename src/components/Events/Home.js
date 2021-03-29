import React, { useEffect, useState } from 'react';
import Events from '../Home/Events';

const Home = () => {
    const [events, setEvents]= useState([])
    console.log(events);
    useEffect(()=>{
        fetch('http://localhost:8080/events')
        .then(res=>res.json())
        .then(data=>setEvents(data || []))
    },[])
    return (
        <div className="row">
                {
                    events.map(event=> <Events event={event}></Events>)
                }
        </div>
    );
};

export default Home;