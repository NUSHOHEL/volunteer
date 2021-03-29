import React from 'react';

const Events = ({event}) => {
    console.log(event);
    return (
        <div className="col-md-3">
         <img style={{width:'300px'}} src={event.image} alt=""/>
         <h1>{event.name} </h1>
        </div>
    );
};

export default Events;