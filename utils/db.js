import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

export default function ConnectDB() {
  mongoose
    .connect(uri)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
}
