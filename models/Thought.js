const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const CommentSchema = new Schema(
    {
        writtenBy: {
            type: String
        },
        thoughtText: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        // use ReplySchema to validate data for a reply
        },
        {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
        }
);