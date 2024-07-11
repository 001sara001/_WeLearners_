const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose')



//database connection

mongoose.connect(process.env.MONGO_URL).
then(()=> console.log('Database Connected'))
.catch((err)=>console.log('Database not connected',err))
//middleware
const app = express();
app.use(cors());

app.use(express.json())

app.use('/', require('./routes/authoRoute'))
app.get('/',cors(),(req,res)=>{

})

app.post('/',async(req,res)=>{
    const{email,password}=req.body

    try {
        const check= await UserModel.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else
        {
            res.json("not exist")
        }
    } catch (e) {
        res.json("not exist")
    }
})
app.post('/register',async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password: password
    }

    try {
        const check= await UserModel.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else
        {
            res.json("notexist")
            await UserModel.insertMany({data})
        }
    } catch (e) {
        res.json("notexist")
    }
})

const port = 8000;
app.listen(port, ()=>
    console.log('server is running on port '+{port})
)
 