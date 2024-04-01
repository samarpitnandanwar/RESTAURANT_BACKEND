import app from "./app.js";

app.listen(process.env.BACKEND_URL, ()=>{
    console.log(`Server Running On URL ${process.env.BACKEND_URL} `);
});

