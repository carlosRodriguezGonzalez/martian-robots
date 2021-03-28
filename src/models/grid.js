class Grid {
  constructor(width, height) {
    if (width > 50 || height > 50) throw new Error("Grid max size 50x50");
    if (width < 1 || height < 1) throw new Error("Grid minimun size 1x1");

    this.scents = [];
    this.world = [];
    this.width = width;
    this.height = height;
  }

  isOutTheGrid = (position) => {
    return (
      position.x < 0 ||
      position.x > this.width ||
      position.y < 0 ||
      position.y > this.height
    );
  };

  addVisitedCoord = (position) => {
    const coord = [position.x, position.y];
    if (
      this.world.filter((x) => {
        return x[0] === coord[0] && x[1] === coord[1];
      }).length === 0
    )
      this.world.push(coord);
  };

  addScentCoord = (position) => {
    const coord = [position.x, position.y];
    if (
      this.scents.filter((x) => {
        return x[0] === coord[0] && x[1] === coord[1];
      }).length === 0
    )
      this.scents.push(coord);
  };

  isScentCoord = (position) => {
    const coord = [position.x, position.y];
    if (
      this.scents.filter((x) => {
        return x[0] === coord[0] && x[1] === coord[1];
      }).length === 0
    )
      return false;
    else return true;
  };
}

module.exports = Grid;
