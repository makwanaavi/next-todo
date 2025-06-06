import mongoose from "mongoose";
const DB_URI =
  "mongodb+srv://makwanaavi73:2N3W08e0UvJtYMJd@cluster0.djbie97.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// await mongoose.connect(DB_URI)
// console.log("DB Connected")
// // mongoose.model("Todo", {})
// export const db = mongoose.connection.db

export const ConnectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Database Connected !");
      return;
    }
    await mongoose.connect(DB_URI, { dbName : "todoApp"});
    console.log("Connected : ", mongoose.connection.readyState);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
    console.log("DB Not Connected");
    process.exit(1);
  }
};
