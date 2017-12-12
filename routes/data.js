var express     = require("express"),
    router      = express.Router();

//  INDEX ROUTE: Bring up the Database Homepage
router.get("/", function(req, res){
    res.render("database");
});

module.exports = router;