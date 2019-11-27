const express = require('express')
const app = express()
const port = 4000
//for sending back HTML file
const path = require('path')
//for POST
const bodyParser = require("body-parser");
//For mongose
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://G00220290:S3cure666@lab7datarep-oxyyu.mongodb.net/employees?retryWrites=true&w=majority'; //connection string (from mongoDB set up in cluster)
mongoose.connect(mongoDB, { useNewUrlParser: true });

//For cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//parse application
app.use(bodyParser.urlencoded({ extended: false }));
//parse application
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Blue print for the storage of data in our database
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    fName: String,
    sName: String,
    locImg: String,
    department: String,
    position: String,
    salary: String
});

//Emp model
const employeeModel = mongoose.model('employee', employeeSchema);
//const pastEmployeeModel = mongoose.model('pastEmp', employeeSchema);

//Post
app.post('/api/employees', (req, res) => {
    //console.log("Request to server...");
    //Use model here
    employeeModel.create({
        fName: req.body.fName,
        sName: req.body.sName,
        locImg: req.body.locImg,
        department:req.body.department,
        position: req.body.position,
        salary: req.body.salary
    })
    res.json("Post Recieved");
})

//Get employee
app.get('/api/employees', (req, res, next) => {
    //console.log("get request")
    employeeModel.find((error, data) => {
        res.json({ employees: data });
    })
})

//delete
app.delete('/api/employees/:id', (req, res) => {
    console.log(req.params.id);
    employeeModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) { //error handling 
            res.json(error);
        }
        res.json(data);
    })
})

//Find by id
app.get('/api/employees/:id', (req,res)=>{
    console.log(req.params.id);

    employeeModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

//Update
app.put('/api/employees/:id',(req,res)=>{
    console.log('EDIT: ' + req.params.id)
    employeeModel.findByIdAndUpdate(req.params.id, 
        req.body, 
        {new:true}, 
        (error,data)=>{
            res.json(data);
        })
})
