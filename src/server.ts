import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

const main = async () => {
  try {
    console.log("datebase is connecting");
    await mongoose.connect(config.datebase_url as string);
    console.log("datebase connected");

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

main();
