const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    multimedia: {
      type: String,
      required: true,
    },
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
