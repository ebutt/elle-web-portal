var express     = require("express"),
    router      = express.Router();

//  INDEX ROUTE: Bring up the Homepage
router.get("/", function(req, res){
    res.render("login");
});
//  INDEX ROUTE: Bring up the Homepage
router.get("/home", function(req, res){
    res.render("index");
});


// router.get("/login", function(req, res){
//   res.render("login");
// });

// router.get("/testing", function(req, res){
//     res.render("test");
// });

// router.get("/testing2", function(req, res){
//     res.render("test2");
// });

// router.get("/testing3", function(req, res){
//     res.render("testOutput");
// });

// router.get("/testing4", function(req, res){
//     res.render("test4.ejs");
// });

module.exports = router;