import mongoose, { Document, Model } from "mongoose";

export interface ITodo {
  todo: string;
  todoDeadline: string;
}

export interface ITodoDocument extends ITodo, Document {
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new mongoose.Schema<ITodoDocument>(
  {
    todo: {
      type: String,
      required: true,
    },
    todoDeadline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo: Model<ITodoDocument> =
  mongoose.models?.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
