import React from "react";

export const Greeting =({name,number}) =>{
   // const{name,number} = props;

    let isMorning = (new Date()).getHours() < 12;
    if(!name) return  null;

    let greetingHeader = isMorning
        ? <h3>Good Morning {name}!</h3>
        : <h3>Good Evening {name}!</h3>;
    return (

        <>
            {greetingHeader}
            { number === 0
            ? null
                : <p>You have {number} new messages</p>}

        </>
    );

}

