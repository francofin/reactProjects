export default (operation, index) => {
    console.log(operation, index);
    return {
        type: 'updateMeat', 
        payload: {
            operation, 
            index
        }
    }
}