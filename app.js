const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './app/views/');

const publicUrl = require('./app/router/publicUrl');
const notSubdomainUrl = require('./app/router/notSubdomain');
const forbiden = require('./app/router/forbiden');


const sequelize = require('./private/database');

const Users = require('./app/model/mainModel');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(publicUrl);

app.use(notSubdomainUrl);

app.use(forbiden);


sequelize.sync().then(()=>{
    Users.count().then(count=>{
        if(count === 0){
            Users.bulkCreate([
                {subdomain:"emremertyilmaz",nameAndSurname:"Emre Mert Yılmaz",information:"5 yıldır bu mesleğin içindeyim",zipCode:1234,email:"mert.42.yilmaz@gmail.com",country:"Türkiye",city:"Ankara",phonenumber:12345},
                {subdomain:"aliunal",nameAndSurname:"Ali Ünal",information:"Yeniyim ama idaalıyım",zipCode:4321,email:"aliunal@gmail.com",country:"Türkiye",city:"İstanbul",phonenumber:123456},
                {subdomain:"emretayyeli",nameAndSurname:"Emre Tayyeli",information:"Eskilerdenim",zipCode:1234,email:"emretayyeli@gmail.com",country:"Türkiye",city:"İzmir",phonenumber:1234567}

            ])
        }
    })
}).catch(err => {
    console.log(err);
});


app.listen(80, () => {
    console.log('Is online 80 port');
});
