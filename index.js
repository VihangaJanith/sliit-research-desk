const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))




mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))


app.use(express.json());


app.use('/ass', require('./routes/assignmentAdmin'));
app.use('/marking', require('./routes/markingRoute'));
app.use('/down', require('./routes/downloadRoute'));

app.use('/test', require('./routes/testUsers'));

app.use('/studentup', require('./routes/studentUploadRoute'));

app.use('/assignedgroups', require('./routes/assignGrupsRoute'));

app.use('/supervisorselection', require('./routes/supervisorSelection'));
app.use('/cosupervisorselection', require('./routes/coSupervisorSelection'));

app.use('/chat', require('./routes/chatRoute'));


app.use('/groups', require('./routes/groupRoute'));

app.use('/topics', require('./routes/TopicsRegistrationRoute'));



app.listen(8000, () => console.log('Server is running on port 8000'))


