import mongoose from "mongoose";

// Define schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // optional: removes whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true, // ensures unique email
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // adds createdAt & updatedAt
});

// Prevent model overwrite error in dev
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
