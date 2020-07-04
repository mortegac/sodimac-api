// axios
// Permite consumir una API

const axios = require('axios');

const getImages = async () => {

    // axios.get(URL)
    // https://picsum.photos/v2/list?limit=10
    
    const res= await axios.get("https://picsum.photos/v2/list?limit=10");
    const data = res.data;
    console.log(data);
    return data;
}

const getError = () => {
    return {
        "result":{
            "internalCode": "ERROR-API",
            "message": "ERROR AL CONSUMIR API",
            "errors" : [],
        }
    }
}


module.exports = {
    getImages,
    getError
};