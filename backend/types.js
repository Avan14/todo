const { z } = require('zod');

const mySchema_todo_creation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required") 
});

const mySchema_markdone = z.object({
  _id: z.string().min(1, "ID is required")
});

module.exports = { mySchema_todo_creation,mySchema_markdone};
