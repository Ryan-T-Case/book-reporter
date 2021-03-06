// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// htmlRoutes.js - all URL routes and the pages (Handlebars views) they render
// ====================================================

// require Sequelize with Models and Config info as "db"
var db = require("../models");

// ====================================================
// NEW HTML ROUTES FOR book-reporter

// "/" > res.render("signin", {})
// "/:user" > res.render("myprojects", {})
// "/:user/:project" > res.render("workspace", {})
// "/:user/:project/wp" > res.render("wordprocessor", {})

// all others route, redirects either to home page, or 404 page







// ROUTES FOR EXAMPLE SITE: COMMENT OUT OR DELETE THESE
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
