const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    content: {
      type: String,
      // required: true,
    },
    multimedia: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
