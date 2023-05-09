var express = require('express');
var router = express.Router();
const {ChecklistRecipe ,Condition} = require("../models");
//GET all Checklist recipe
router.get('/', async (req, res) => {
    try{
    const checklistRecipes = await ChecklistRecipe.findAll();
    res.json(checklistRecipes)
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving recipes for condition", error });
    }
});
// GET recipes based on particular condition
router.get('/:conditionID', async (req, res) => {
    try {
        console.log('trying to show all with an condition')
        console.log(req.params.conditionID)
        console.log(typeof(req.params.conditionID))
        const checklistRecipes = await ChecklistRecipe.findAll({
            where: {
                conditionID: req.params.conditionID
            }
        })
       //apple
        res.json(checklistRecipes)
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving recipes for condition", error });
    }
})
module.exports = router;