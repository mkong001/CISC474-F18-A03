const Question=require('../models/question');

exports.getQuestions=function(req,res,next){
    Question.find({},function(err,questions){
        res.status(201).json(questions)
    })
}

exports.createQuestion=function(req,res,next){
    console.log(req.body);
    var u=new Question({title: req.body.title,subject: req.body.subject,details: req.body.details,username: req.body.username,answers: req.body.answers});
    u.save(function(err,question){
        res.status(200).json(question);
    });
}
exports.getQuestion=function(req,res,next){
    res.status(202).json({result: 'not implemented'})

}