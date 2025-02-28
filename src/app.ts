
import express from 'express'


//Importing Routes
import userRoute from './routes/user.js'
import { connnectDB } from './utils/features.js';



const port = 4000;

connnectDB();

const app = express();

app.get("/",(req,res)=>{
    res.send("API working with /api/v1");
})

// Using Routes
app.use("/api/vi/user",userRoute);





app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});