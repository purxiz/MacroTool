//routes/pyquil.js
var express     = require('express');
var router      = express.Router();

//import our model for database operations
var Meal     = require('../models/meal');

router.route('/')
    .get( (req, res) => {
        //TODO: return the names and ids (?) of all meals in the DB (req.params.token)
        var meal = new Meal();
        meal.name = req.body.name;
        if(req.body.description) {
            meal.description = req.body.description;
        }
        meal.calories = req.body.calories;
        meal.macros.protein = req.body.protein;
        meal.macros.fat = req.body.fat;
        meal.macros.carbohydrate = req.body.carbohydrate;
        meal.ingredients = req.body.ingredients;
        meal.save( (err) => {
            if(err) {
                res.send(err);
            }else{
                res.json( { message: 'meal Saved' } );
            }
        });
    });

router.route('/:token')
    .get ( (req, res) => {
        //TODO: return the names and ids (?) of all meals that begin with $TOKEN (req.params.token)
    });

module.exports = router;
