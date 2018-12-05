const testController=require('./controllers/test-controller'),
questionController=require('./controllers/questions.controller'),
express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const questionRoutes = express.Router();
    questionRoutes.get('/',questionController.getQuestions);
    questionRoutes.get('/:id',questionController.getQuestion);
    questionRoutes.post('/',questionController.createQuestion);

    apiRoutes.use('/questions',questionRoutes);


    apiRoutes.get('/test', testController.test);
    //attach router to root
    app.use('/api', apiRoutes);
};