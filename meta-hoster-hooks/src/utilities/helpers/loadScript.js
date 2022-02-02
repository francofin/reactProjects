export default (scriptUrl) => {
    return  new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type='text/javascript';
        script.src = scriptUrl;
        script.onload = () =>{
            console.log("resolve running");
            resolve();
        }
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log('loaded script tag')
    })
    }