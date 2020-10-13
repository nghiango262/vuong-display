import React from "react";

const RowTable = ({ label, bgColor = null }) => {
  return <td bgcolor={bgColor}>{label}</td>;
};

export default RowTable;
