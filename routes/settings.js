var express     = require("express"),
    router      = express.Router();

//  INDEX ROUTE: Bring up the Homepage
router.get("/", function(req, res){
    res.render("settingsMenu");
});

// router.get("/accountInfo", function(req, res){
//     res.render("accountInfo");
// });

router.get("/resetPassword", function(req, res){
    res.render("resetPassword");
});

router.get("/pendingAdmins", function(req, res){
    res.render("pendingAdmins");
});

module.exports = router;