const mongoose = require('mongoose'),  
Schema = mongoose.Schema;


const QuestionSchema = new Schema({  
    title: {
      type: String,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  });

  QuestionSchema.methods.getProfile=function() {
    return this.profile;
  }
  module.exports = mongoose.model('Question', QuestionSchema); 