const { Schema, model } = require("mongoose");

const GridSchema = Schema(
  {
    worldExplore: [[Number]],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Grid", GridSchema);
