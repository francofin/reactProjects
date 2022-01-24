const seedData = [
    {food: "Lettuce",
     quantity:106}, 
     {food:"Turnips",
     quantity:155},
     {food:"Apples",
     quantity:120}
 ]
 
 
 export default (state = seedData, action) => {
    if(action.type === 'updateProduce') {
        console.log("I care what just happened");
        let newState = [...state];
        if(action.payload.operation === "+"){
            newState[action.payload.index].quantity++
        } else if(action.payload.operation === "-"){
            newState[action.payload.index].quantity--
        }
        
        return newState;
    } else if (action.type === "clearInventory"){
        let newState = [...state];
        newState.forEach((item, i) => {item.quantity=0})
        return newState;
    } 
    
    else {
        return state;
    }
 }