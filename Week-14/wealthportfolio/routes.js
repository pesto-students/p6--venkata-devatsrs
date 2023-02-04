const express = require("express");
const router = express.Router();
const auth = require("./controller/auth.controller.js");
const file = require("./controller/file.controller.js");
const authenticate = require('./lib/authenticate.js');
const financial = require("./controller/financials.controller.js");


let routes = (app) => {

  //authentication 
  router.post("/login", auth.login);
  router.post("/register", auth.register);
  

  router.get("/", authenticate, financial.getAll);
  router.post("/financials", authenticate, financial.getByFilter);
  router.get("/financial/year/:year", authenticate, financial.getByYear);
  router.delete("/financial/:id", authenticate, financial.deleteById);

  //file upload 
  router.post("/upload", file.upload);
  router.get("/files", file.getListFiles);
  router.get("/files/:name", file.download);

  app.use(router);
};

module.exports = routes;
