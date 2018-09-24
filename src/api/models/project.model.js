const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

/**
 * Project Schema
 * @private
 */
const projectSchema = new mongoose.Schema({

  // Project name
  name: {
    type: String,
    required: true,
    trim: true,
  },


  // Project Type
  projectType: {
    type: Number,
  },
  description: {
    type: String
  },

  place: {
    type: String
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Places',
    // required: true, 
  },

  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },

  time : {
    type: String
  },

  pgoals: {
    type: String,
  },

  pkeywords: {
    type: String,
  },
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
  	type: Number,
  	default: 1
  }
  
});

projectSchema.plugin(paginate);
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
