const mongoose = require('mongoose'),  
Schema = mongoose.Schema;


const QuestionSchema = new Schema({  
    title: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    details: String,
    username: {
      type: String,
      required: true
    },
    answers: [String]
  },
  {
    timestamps: true
  });

  QuestionSchema.methods.getProfile=function() {
    return this.profile;
  }
  module.exports = mongoose.model('Question', QuestionSchema); 