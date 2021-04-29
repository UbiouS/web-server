import express from "express";
import weatherRouters from "./routers/weather.routers.js";
import favouriteRouters from "./routers/favourite.routers.js";
import cors from "cors";
import mongoose from "mongoose";

const HOST_PORT = 3000;
const DB_URL = "mongodb+srv://user:rakaka44@cluster0.fhhnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();

app.use(cors());

async function mongoConnect() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Successful connection to MongoDB')
    } catch (e) {
        console.log(e);
    }
}

mongoConnect().catch(console.dir);

app.use(weatherRouters);
app.use(favouriteRouters);


app.listen(HOST_PORT, () => {
    console.log(`Server has been started on port ${HOST_PORT}`);
})
