import React from 'react';


function Home(props){
    console.log(props);
    props.history.block("Are you sure you want to ")
    // setTimeout(()=>{
    //     // props.history.push("/help");
    //     // props.history.goBack();
    // }, 2000)
    return(
        <h1>This is Home. {props.title}</h1>
    )
}
export default Home