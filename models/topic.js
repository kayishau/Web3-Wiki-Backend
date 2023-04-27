const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    picture: String,
    title: String,
    text: String,
    sectionOneTopic: String,
    sectionOneText: String,
    sectionTwoTopic: String,
    sectionTwoText: String,
    sectionThreeTopic: String,
    sectionThreeText: String
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;