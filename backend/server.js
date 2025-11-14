import { app } from "./src/app.js";
import { connectDb } from "./src/bd/databaseConnection.js";

const port = process.env.PORT || 5000;



connectDb().then(() => {
    app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
    })
}).catch((error) => {
    console.log("Failed to connect to the databse:",error);
})

