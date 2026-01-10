import Express from "express";

//App setup
const App = Express();

//Middleware set 
App.use(Express.json)



//server listen
const PORT = 3000;
App.listen(PORT,()=>{
    console.log("server Running..")
})
