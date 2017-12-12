var express     = require("express"),
    router      = express.Router();

//  INDEX ROUTE: Bring up the Homepage
router.get("/", function(req, res){
    res.render("assetsMenu");
});

//  INDEX ROUTE: Bring up the Homepage
router.get("/myGroups", function(req, res){
    res.render("myGroups");
});

//  INDEX ROUTE: Bring up the Homepage
router.get("/myGroups/create", function(req, res){
    res.render("editGroup");
});

//  INDEX ROUTE: Bring up the Homepage
router.get("/myGroups/edit", function(req, res){
    res.render("editGroup");
});


//  INDEX ROUTE: Bring up the Homepage
router.get("/myPacks", function(req, res){
    res.render("myPacks");
});

//  INDEX ROUTE: Bring up the Homepage
router.get("/myPacks/create", function(req, res){
    res.render("createLang");
});

//  INDEX ROUTE: Bring up the Homepage
router.get("/myPacks/edit", function(req, res){
    res.render("editPermissions");
});


// //  INDEX ROUTE: Bring up the Homepage
// router.get("/", function(req, res){
//     res.render("assetsMenu");
// });


module.exports = router;