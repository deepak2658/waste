const MongoClient = require('mongodb').MongoClient;

const mongoConnect = (callback)=>{
  MongoClient.connect('mongodb+srv://deepak2658:legenddeepak@cluster0.ew2wv.mongodb.net/users?retryWrites=true&w=majority')
 .then(results=>console.log(results))
 .catch(err=>console.error(err));
}

module.exports = mongoConnect;