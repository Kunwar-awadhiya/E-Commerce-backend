import mongoose from "mongoose"

export const connnectDB = () => {
    mongoose.connect("mongodb+srv://keven3605y:3lBAaYlLnrMGqXNw@cluster0.ld2av.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        dbName : "Ecommerce 24",
    }).then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};