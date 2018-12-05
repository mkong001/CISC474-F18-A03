const express = require('express')
const app = express()
const User = require('./model/user');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/projectDB';
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))
 
app.get('/api/user/askquestion', (req, res) => {
        mongoose.connect(url, function(err){
            if(err) throw err;
            console.log('connected successfully, title is ',req.body.title, ' description is ',req.body.description);
        });
    })

    app.post('/api/user/askquestion', (req, res) => {
        mongoose.connect(url,{ useMongoClient: true }, function(err){
            if(err) throw err;
            User.find({
                username : req.body.username, password : req.body.password
            }, function(err, user){
                if(err) throw err;
                if(user.length === 1){  
                    return res.status(200).json({
                        status: 'success',
                        data: user
                    })
                } else {
                    return res.status(200).json({
                        status: 'fail',
                        message: 'Login Failed'
                    })
                }
                 
            })
        });
    })
    app.listen(3000, () => console.log('blog server running on port 3000!'))