module.exports = function (app) {
  //QUOTE
  const QuoteController = require("../app/controllers/QuoteController.js");

  app.post("/api/quotes/create", QuoteController.create);

  app.get("/api/quotes/", QuoteController.getAll);

  app.put("/api/quotes/update-quote/:id", QuoteController.updateQuote);

  app.delete("/api/quotes/delete/:id", QuoteController.delete);
};
