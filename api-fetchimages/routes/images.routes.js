const express = require("express");
const router = express.Router();
const { getImages } = require('../models/images.models');

router.get('/', async (req,res)=>{
     // Capturar Error  con try/catch 
    try {
        const response = await getImages();
        console.table(response);

        res.status(200).json(response);


    } catch (error) {
        res.status(500).json({message: error})
    }
});

module.exports = router;