import React, { FC } from "react";
import Box from "../Box";

const grid = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0],
];

const handleClick = (rowIndex: any, rowData: any, columnIndex: any) => {
  console.log(grid[rowIndex][columnIndex]);

  console.log(rowIndex, columnIndex, rowData);
};
const Board: FC = () => {
  const renderBox = (row: any, rowIndex: any) => {
    return row.map((rowData: any, columnIndex: any) => {
      return (
        <Box
          key={columnIndex}
          value={rowData}
          onClick={() => handleClick(rowIndex, rowData, columnIndex)}
        />
      );
    });
  };

  const mapGrid = grid.map((row: any, index: number) => {
    return (
      <div key={index} className="row">
        {renderBox(row, index)}
      </div>
    );
  });

  return <div className="board">{mapGrid}</div>;
};
export default Board;
