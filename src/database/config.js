const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:passwordsecure@itsfree.lpb9g.mongodb.net/martianRobots?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );

    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - vea logs");
  }
};

module.exports = {
  dbConnection,
};
