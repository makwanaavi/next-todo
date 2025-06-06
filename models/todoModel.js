import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
});

// Avoid model overwrite error in development
const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
