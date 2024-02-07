const { Schema, model } = require("mongoose");

const bioSchema = new Schema(
  {
    body: {
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

module.exports = model("Bio", bioSchema);
