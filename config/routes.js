// var scrape = require("../scripts/scrape");
// var Article = require("../models/Article");
// var Note = require("../models/Note");
// var articlesController = require("../controllers/articles");
// var notesController = require("../controllers/notes");

module.exports = function (router) {

router.get("/", function (req, res) {
    Article.find({ saved: false }, function (error, found) {
        if (error) {
            console.log(error);
        } else if (found.length === 0) {
            res.render("empty")
        } else {

            var hbsObject = {
                articles: found
            };
            res.render("index", hbsObject);

        }
    });
});

};