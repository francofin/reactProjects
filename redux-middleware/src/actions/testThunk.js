export default () =>{
    return (dispatch, getState)=>{
        setTimeout(()=>{
            console.log("I waited for 2 seconds.")
            const reduxState = getState();
            console.log(reduxState)
            if(reduxState.weather.main){
                dispatch({
                    type:"testThunk"
                })
            }
            
        }, 2000)
    }
}