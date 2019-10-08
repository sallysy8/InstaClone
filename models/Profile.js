const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    description:{
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },

    bio: {
        type: String
    },

    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    phone:{
        type: Number
    },
    following: [
        {
            user: {
                type: String
            }
        }
    ],
    follower: [
        {
            user: {
                type: String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
