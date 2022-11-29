var express = require("express");
var router = express.Router();
var data = require("../models/data");


/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Jeopardize Contest " });
});
router.get("/task1", function (req, res, next) {

    let title = req.query.title;
    let selectedEquotions = data.emotions.find
        (item => item.title == title);
    if (!selectedEquotions) {
        selectedEquotions = {
            quotePath: 'images/task1/default.jpg'
        };
    }
    res.render("tasks/task1", { title: "Inspiring Quotes", data: data.emotions, quotePath: selectedEquotions.quotePath });
});
router.get("/task2", function (req, res, next) {
    res.render("tasks/task2", { title: "Jars Saving" });
});


router.get("/task3", function (req, res, next) {
    let category = req.query.category;
    let selectProducts = category ? data.products.filter(item => item.category == category) : data.products;
    res.render('tasks/task3', {
        title: 'TV sales',
        categories: data.categories,
        products: selectProducts,
    });

});

router.get("/task4", function (req, res, next) {
    res.render("tasks/task4", {
        title: "Zodiac Characteristics",
        data: data.zodiacs,
    });
});

router.get("/task4/:name", function (req, res, next) {
    const nameZodiac = req.params.name;

    res.render("tasks/task4-detail", {
        title: nameZodiac,
        data: data.zodiacs.find((zodiac) => zodiac.name == nameZodiac),
    });
});

module.exports = router;