const express = require('express')
const router = express.Router();


router.get('/', (req, res)=>{
    res.status(200).json({ message:'Consulta de Usuario'});
});

router.post('/', (req, res)=>{
    res.status(201).json({ message:'Usuario creado'});
    // 201 = Recurso creado
});

router.put('/:id', (req, res)=>{
    let id = parseInt(req.params.id)
    res.status(200).json({ message:`Usuario ${id} Actualizado`});
});

router.delete('/:id', (req, res)=>{
    let id = parseInt(req.params.id)
    res.status(200).json({ message:`Usuario ${id} Eliminado`});
});


module.exports = router
