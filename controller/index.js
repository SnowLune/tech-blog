const router = require("express").Router();

// Home
router.get("/", (req, res) => {

});

// Log In
router.get("/login", (req, res) => {
   res.render("login");
})

module.exports = router;
