var express = require('express');
var router = express.Router();

const {ChecklistRecipes} = require("../models");

//GET randomized recipe
router.get('/', async (req, res) => {
    try{
    const checklistRecipes = await ChecklistRecipes.findAll();
    res.json(checklistRecipes)
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving random fact", error });
    }
});

router.get('/random', async (req, res) => {
    try{
        const count = await ChecklistRecipes.count()

        //function to generate a random number between 1 and the number of rows of the Recipe table
         let randomNum = () =>{
            let num = 1+Math.floor(Math.random()*(count))
            return num
        }
       
    const checklist = await ChecklistRecipes.findByPk(randomNum())
    res.json(checklist)
    }
    
    catch (error){
        res.status(500).json({ message: "Error retrieving random fact", error });
    }
})

module.exports = router;