const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const { response } = require("express");
const CONNECTION_URL =
  "mongodb+srv://singhsujata:7l4CP6x7mvxcOXr7@cluster0.nl7lf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const DATABASE_NAME = "SageSujata";

var app = Express();
app.use(Cors());
app.use(BodyParser.json());


//connecting with mongodb

MongoClient.connect(CONNECTION_URL, function (err, db) {
  if (err) throw err;
  dbo = db.db("Bankdata");
 
  console.log("Connected");
  dbo.collection("BankingManagement").find({});
});



// import data
app.get("/importdata", (request, response) => {
  dbo
    .collection("BankingManagement")
    .find({})
    .toArray((error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    });
});



// export data
app.post("/exportdata", (request, response) => {
  dbo.collection("BankingManagement").insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("Data Sent");
    response.json(true);
  });
});




//User Id get  Add User

//TO_DO : Naming conventions should be good, For eg. this api route name should be "getUserById"

app.get("/test/:id", (request, response) => {
  dbo
    .collection("BankingManagement")
    .findOne({ _id: new ObjectId(request.params.id) }, function (err, res) {
      if (err) console.log(err);
      response.send(res);
    });
});






//delete api
app.listen(5002, () => {});