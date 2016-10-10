import User from '../models/user_model';
const util = require('util')

// export const getUser = (req, res) => {
// 	Outing.find({}, function(err,obj) { console.log(obj); });
// };

// export const getUserType = (req, res) => {
// 	User.find({}, function(err, obj) { console.log(obj);});
// };

export const getUser = (callback, phoneNumber) => {
	User.findOne({ 'phoneNumber': phoneNumber }).exec(callback);
}

// export const getJournalUsers = (callback) => {
// 	// var users = User.find({ 'group' : '2'});
// 	// console.log(users);
// 	User.find({ 'group': '2'}).exec(callback);
// }

export const getJournalUsers = (callback) => {
	User.find({'group': '2'}).exec(callback);
}

export const saveJournalEntry = (phoneNumber, journal) => {
	//get user with that phone number, push journal onto journals array
	User.findOneAndUpdate(
		{'phoneNumber': phoneNumber},
		{$push: {'journals': journal}},
		function(err, user) {
			if (err) {
				console.log('got an error in findOneAndUpdate');
			}
		});
}
