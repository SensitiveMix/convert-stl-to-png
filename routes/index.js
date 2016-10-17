var express = require('express');
var router = express.Router();
var stljs = require('stljs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/getStl', function () {
    stljs.imageify(
        '/Users/jack/WebstormProjects/convertSTL/public/stl/2d.stl',
        {width: 200, height: 100, dst: '/Users/jack/WebstormProjects/convertSTL/public/stl/2d.png'},
        function (err, povOutput, name) {
            console.log("done rendering stl to jpg");
            console.log(povOutput);
            console.log(name);
        }, function (err, povPolygon, name) {
            console.log("done rendering stl to jpg");
            console.log(povPolygon);
            console.log(name);
        })
});

module.exports = router;
