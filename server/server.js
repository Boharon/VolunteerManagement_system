/////passport
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const passport = require("passport")

if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non prod environments
  require("dotenv").config()
}
require("./utils/connectdb")

require("./strategies/JwtStrategy")
require("./strategies/LocalStrategy")
require("./authenticate")
const userRouter = require("./routes/userRoutes")



const app = express()
const http=require("http")
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
io.on("connection", socket => {
  socket.emit("your id", socket.id);
  socket.on("send message", body => {
      io.emit("message", body)
  })
})


app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

//Add the client URL to the CORS policy

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"+origin))
    }
  },

  credentials: true,
}
app.use(cors(corsOptions))
app.use(passport.initialize())
app.use("/users", userRouter)


const adultRouter = require('./routes/Adult-routes');
const deliveryManRouter=require('./routes/DeliveryMan-routes');
const deliveryRouter=require('./routes/Delivery-routes');
const addressRouter = require('./routes/Adress-routes');
const blogRouter = require('./routes/Blog-routes');
const toolsRouter= require('./routes/tools-routes');
const graphsRouter=require('./routes/Graphs-routes');
const morgan=require('morgan');




app.use(morgan('dev'));
//app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());



const router=require('./router/router');

//Routes
app.use(router);
//app.use('/api/signUp',require('./router/signUp'));
//app.use('/api/signIn',require('./router/signIn'));
app.use('/adult', adultRouter);
app.use('/deliveryMan', deliveryManRouter);
app.use('/delivery', deliveryRouter);
app.use('/address', addressRouter);
app.use('/blog',blogRouter);
app.use('/tools',toolsRouter);
app.use('/graphs',graphsRouter)

/*
server.listen(port);

console.log('Server is running on 127.0.0.1:'+port);
*/


app.get("/", function (req, res) {
  res.send({ status: "success" })
})

//Start the server in port 3333
server.listen(3333, () => console.log("server is running on port 3333"));
/*const server = app.listen(process.env.PORT || 3333, function () {
  const port = server.address().port

  console.log("App started at port:", port)
})*/
//const app=express();
//server =http.createServer(app);
/*
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./usersChat');
io.on('connect',(socket)=>{
    console.log("We have a new connection!!!");
    socket.on('join',({name,room},callback)=>{
       const {error,user}=addUser({id:socket.id,name,room});
       
       if(error) return callback(error);
       
       socket.emit('message',{user:'admin',text: `${user.name}, welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message',{user:'admin',text: `${user.name} has joined!`});

       socket.join(user.room);


       callback();
    });
    socket.on('sendMessage',(message,callback)=>{
        const user =getUser(socket.id);
        io.to(user.room).emit('message',{user: user.name,text:message});
        callback();
    });
    socket.on('disconnect',()=>{
        const user=removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message',{user:'adim',text:`${user.name} has left.`});
        }
        console.log("User had left!!!");
    })

});

*/