var mongoose = require('mongoose');
var Schema = mongoose.Schema


var SurveySchema = new Schema({
	question: {
		type: String,
		required: true
	},
	options: [{
		type: Schema.Types.ObjectId,
		ref: 'Opt'
	}],
	createdAt: {
		type: Date,
		default: new Date
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})
var Survey = mongoose.model('Survey', SurveySchema)

var OptionSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	votes: {
		type: Number,
		default: 0
	},
	_survey: {
		type: Schema.Types.ObjectId,
		ref: 'Survey'
	}
})
var Opt = mongoose.model('Opt', OptionSchema)