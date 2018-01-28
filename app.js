var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser")
    
var indexRoutes     = require("./routes/index"),
    userlogRoutes   = require("./routes/userlog"),
    dataRoutes      = require("./routes/data"),
    languageRoutes  = require("./routes/languages"),
    assetRoutes     = require("./routes/assets"),
    settingRoutes   = require("./routes/settings");
    

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);
app.use("/userlog", userlogRoutes);
app.use("/languages", languageRoutes);
app.use("/assets", assetRoutes);
app.use("/settings", settingRoutes);

//  Start the server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The ELLE Server Has Started");
});

// app.listen(process.env.PORT, '159.203.163.127', function(){
//   console.log("Touch Digital Ocean");
// });