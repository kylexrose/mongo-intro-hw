const Recipe = require('../model/Recipe');

module.exports = {
    getAllRecipes: (callback) => {
        Recipe.find({}, (err, payload) => {
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },
    createRecipe: (body, callback) => {
        let createdRecipe = new Recipe({
            recipeName: body.recipeName,
            ingredients: body.ingredients,
            directions: body.directions,
        })

        createdRecipe.save((err, payload)=>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    }
};