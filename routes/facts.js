var express = require('express');
var router = express.Router();

const {Facts} = require("../models");

//GET randomized recipe
router.get('/', async (req, res) => {
    try{
    const facts = await Facts.findAll();
    res.json(facts)
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving random fact", error });
    }
});

router.get('/random', async (req, res) => {
    try{
        const count = await Facts.count()

        //function to generate a random number between 1 and the number of rows of the Recipe table
         let randomNum = () =>{
            let num = 1+Math.floor(Math.random()*(count))
            return num
        }
       
    const fact = await Facts.findByPk(randomNum())
    res.json(fact)
    }
    
    catch (error){
        res.status(500).json({ message: "Error retrieving random fact", error });
    }
})

module.exports = router;