const express = require('express');
const router = express.Router();
const dbConn = require('../db/connection');



router.get('/', async (req, res)=>{
    
    const sql = `SELECT * FROM app_user;`;
    // dbConn.query( SQL , PARAMS, callback ){
    dbConn.query(sql, null, function(error, results, fields){

        // if(error){
        //     res.status(404).json({message: error})
        // }else{
        //     res.status(200).json(results)
        // }

        // OPERADOR TERNARIO
        // CONDICION ? OPERACION_TRUE : OPERACION_FALSE 

        error?
           res.status(404).json({message: error})
           :res.status(200).json(results)

    })
});

router.get('/:id', async (req, res, next)=>{
    let id = parseInt(req.params.id)
    const userArray = [ id ];

    const sql = `SELECT * FROM app_user WHERE user_id=?;`;
    dbConn.query(sql, userArray, function(error, results, fields){
        error?
           res.status(404).json({message: error})
           :res.status(200).json(results)

    })

});



router.post('/', (req, res)=>{
    const user= req.body.user;
    console.log(user);

    const sql = `INSERT INTO app_user(user_mail, user_status) VALUES ("${user.mail}", "${user.status}");`;
    
    dbConn.query(sql, null, function(error, results, fields){

        error?
           res.status(404).json({message: error})
           :res.status(201).json({message: 'Usuario fue creado'})

    })

});


router.delete('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const userArray = [ id ];

    const sql = `DELETE FROM app_user WHERE user_id=?;`;
    dbConn.query(sql, userArray, function(error, results, fields){
        error?
           res.status(404).json({message: error})
           :res.status(200).json({message: `Usuario con ID ${id} fue eliminado`})

    })


});


router.put('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const user = req.body.user;
    const userArray = [ user.mail, parseInt(user.status), parseInt(id) ];

    const sql = `UPDATE app_user SET user_mail=?, user_status=?  WHERE user_id=?;`;
    dbConn.query(sql, userArray, function(error, results, fields){
        error?
           res.status(404).json({message: error})
           :res.status(200).json({message: `Usuario con ID ${id} fue actualizado`})

    })




    // res.status(200).json({message: `Usuario con ID ${id} fue modificado`})

});

module.exports = router
