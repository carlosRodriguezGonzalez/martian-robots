const GridDatabase = require("../database/grid.database");

const getGrids = async (req, res) => {
  const grids = await GridDatabase.find();
  res.send({ grids: grids });
};

const getGridById = async (req, res) => {
  const { gridId } = req.params;
  const grid = await GridDatabase.findById(gridId);
  res.send(grid);
};

module.exports = { getGrids, getGridById };
