const express = require("express")
const app = express()
// const port =3000
const port = process.env.PORT || 5000
// app.get('/',(req, res)=>{
//     res.send("Hello Home Page")
// })
app.get('/prices', (req, res) => {
    res.send("Prices Page")
})
app.get('/prices', (req, res) => {
    res.send("Prices Page")
})
// app.get('/team', (req, res) => {
//     res.send("Shaimaa & khaled & omar")
// })
app.get('/page1', (req, res) => {
    res.send("<h2>welcom</h2> <button>send</button>")
})
app.get('/page2', (req, res) => {
    res.send({
        name: "shaimaa Ali",
        age: "24"
    })
})
////////////////////////
//static path:
const path = require("path")
const { title } = require("process")
console.log(__dirname)
// console.log(path.join(__dirname ,"../public"))
const x = path.join(__dirname, "../public")
app.use(express.static(x))

//////////

app.set('view engine', 'hbs')
var hbs =require("hbs")
const partialpath =path.join(__dirname ,"../temp1/partials")
hbs.registerPartials(partialpath)

const viewsDirectory =path.join(__dirname, "../temp1/views")
app.set("views",viewsDirectory)

app.get('/', (req, res) => {
    res.render('index', {
        title: "home",
        desc: "this is home page"
    })
})

app.get('/service', (req, res) => {
    res.render('service', {
        title: "service",
        name: "omar",
        city: "cairo",
        image1: "../image/medium.webp"
    })
})
app.get('/team', (req, res) => {
    res.render('team', {
        title: "team",
        name: "shaimaa",
        city: "cairo",
        image2: "../image/bird-8788491_1280.webp"
    })
})
app.get('/route', (req, res) => {
    res.render('route', {
        title: "route",
        name: "routing page",
        image3: "../image/1_EvDUbqUq135ePkDlua7bTw.png"
    })
})
app.get('/info', (req, res) => {
    res.render('info', {
        title: "info",
        name: "information",
        image4: "../image/Communication-Networks-How-is-Information-Transmitted_knowledge_standard.jpg"
    })
})
app.listen(port, () => {
    console.log("App is listinning on port")
})