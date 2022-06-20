const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  suite:"Functional tests", function() {
    test("Viewing one stock: GET request to /api/stock-prices/", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices/")
        .set("content-type", "application/json")
        .query({ stock: "TSLA"})
        .end(function (erc, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.stockData.stock, "TSLA");
          assert.exists(res.body.stockData.price, "TSLA has a price ");
          done();
        
      });
    });
    
    test("Viewing one stock & liking : GET request to /api/stock-prices/", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices/")
        .set("content-type", "application/json")
        .query({ stock: "AMZN", like:true })
        .end(function (erc, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.stockData.stock, "AMZN");
          assert.equal(res.body.stockData.likes, 1);
          assert.exists(res.body.stockData.price, "TSLA has a price ");
          done();
        
      });
    });
    
    test("Viewing stock again and liking it: GET request to /api/stock-prices/", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices/")
        .set("content-type", "application/json")
        .query({ stock: "AMZN", like:true })
        .end(function (erc, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.stockData.stock, "AMZN");
          assert.equal(res.body.stockData.likes, 1);
          assert.exists(res.body.stockData.price, "AMZN has a price ");
          done();
        
      });
    });
    test("Viewing two stocks: GET request to /api/stock-prices/", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices/")
        .set("content-type", "application/json")
        .query({ stock: ["GOOG","AAPL"] })
        .end(function (erc, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.stockData.stock[0], "GOOG");
          assert.equal(res.body.stockData.stock[1], "AAPL");
          assert.exists(res.body.stockData.price[0], "GOOG has a price ");
          assert.exists(res.body.stockData.price[1], "APPL has a price ");
          done();
        
      });
    });
    
    test("Viewing two stocks and liking them: GET request to /api/stock-prices/", function (done) {
      chai
        .request(server)
        .get("/api/stock-prices/")
        .set("content-type", "application/json")
        .query({ stock: ["GOOG","AAPL"], like: true })
        .end(function (erc, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.stockData.stock[0], "GOOG");
          assert.equal(res.body.stockData.stock[1], "AAPL");
          assert.exists(res.body.stockData.price[0], "GOOG has a price ");
          assert.exists(res.body.stockData.price[1], "APPL has a price ");
          assert.exists(res.body.stockData[0].rel_likes, "has rel_liked");
          done();
        
      });
    });
  }
});

