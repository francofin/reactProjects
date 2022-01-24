const seedData = [
   {food: "TV dinners",
    quantity:10}, 
    {food:"Frozen Veggies",
    quantity:15},
    {food:"Frozen Fries",
    quantity:12}
]


export default (state = seedData, action) => {
    console.log("Frozen Reducer is running")
    console.log(action);
    if(action.type === 'updateFrozen') {
        console.log("I care what just happened");
        const newState = [...state];
        if(action.payload.operation === "+"){
            newState[action.payload.index].quantity++
        } else if(action.payload.operation === "-"){
            newState[action.payload.index].quantity--
        }
        
        return newState;
    } else if (action.type === "clearInventory"){
        return [];
    } 
    
    else {
        return state;
    }
    
}