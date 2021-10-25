import React, { FC } from "react";
interface Props {
  value: any;
  onClick: () => void;
}

const Box: FC<Props> = ({ value, onClick }) => {
  return (
    <button className={`box box-${value}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Box;
