const express = require("express");
const router = express.Router();

const recipeController = require("./controller/recipeController");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-all-recipes", (req, res) => {
  recipeController.getAllRecipes((err, payload) => {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

router.post("/create-recipe", (req, res) =>{
  recipeController.createRecipe(req.body, (err, payload) =>{
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload});
    }
  });
});

module.exports = router;
