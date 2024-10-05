const { mongoose } = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todos');
const schema = mongoose.Schema({
    title:String,
    description:String,
    marked:Boolean
})
const tasks = mongoose.model('Tasks',schema);

module.exports={tasks};
