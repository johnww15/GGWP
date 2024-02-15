const { Schema, model } = require("mongoose");

const bioSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: false,
      default: "This is a new profile with an unupdated bio",
    },
    multimedia: {
      type: String,
      required: false,
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

module.exports = model("Bio", bioSchema);
