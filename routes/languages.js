var express     = require("express"),
    router      = express.Router();

//  INDEX ROUTE: Bring up the Homepage
router.get("/", function(req, res){
    res.render("languageMenu");
});

router.get("/create", function(req, res){
    res.render("createLang");
});

router.get("/select", function(req, res){
    res.render("selectLang");
});

router.get("/editMenu", function(req, res){
    res.render("editLangMenu");
});

router.get("/editMenu/editTerm", function(req, res){
   res.render("editTerm");
});

router.get("/editMenu/createTerm", function(req, res){
   res.render("createTerm");
});

router.get("/editMenu/selectTerm", function(req, res){
   res.render("selectTerm");
});

module.exports = router;