var express     = require("express"),
    router      = express.Router();

//  INDEX ROUTE: Bring up the userlog page
router.get("/", function(req, res){
    res.render("userlog");
});

//  NEW ROUTE: Reload the page with the proper DB user and populate its fields
router.get("/:id", function(req,res){
    //  RENDER WITH THE USER's Data
    res.render("userlog", {})
});


module.exports = router;