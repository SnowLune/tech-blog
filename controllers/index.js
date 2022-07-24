const router = require("express").Router();

// Home
router.get("/", (req, res) => {
   res.render("main");
});

// Log In
router.get("/login", (req, res) => {
   res.render("login");
})

module.exports = router;
