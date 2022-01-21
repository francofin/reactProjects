export default (operation, index) => {
    console.log(operation, index);
    return {
        type: 'updateFrozen', 
        payload: {
            operation, 
            index
        }
    }
}