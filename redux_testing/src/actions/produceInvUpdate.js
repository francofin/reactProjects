export default (operation, index) => {
    console.log(operation, index);
    return {
        type: 'updateProduce', 
        payload: {
            operation, 
            index
        }
    }
}