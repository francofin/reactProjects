const seedData = [
    {food: "Chicken",
     quantity:16}, 
     {food:"Lamb",
     quantity:15},
     {food:"Salmon",
     quantity:5}
 ]
 
 
 export default (state = seedData, action) => {
    if(action.type === 'updateMeat') {
        console.log("I care what just happened");
        const newState = [...state];
        const payload = action.payload;
        newState[payload.index].quantity += payload.qChange;
        // if(action.payload.operation === "+"){
        //     newState[action.payload.index].quantity++
        // } else if(action.payload.operation === "-"){
        //     newState[action.payload.index].quantity--
        // }
        
        return newState;
    } else if (action.type === "clearInventory"){
        return [];
    } 
    
    else {
        return state;
    }
 }