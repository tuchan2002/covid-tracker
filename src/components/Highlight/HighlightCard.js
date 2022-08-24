import React from "react";
import CountUp from "react-countup";

const makeBorderStyles = (type) => {
  if (type === "confimed") return "border-red-400";
  else if (type === "recovered") return "border-green-400";
  else return "border-gray-400";
};
const HighlightCard = ({ title, count, type }) => {
  return (
    <div
      className={`rounded-md shadow-md p-4 border-l-8 ${makeBorderStyles(
        type
      )}`}
    >
      <h4 className="text-lg">{title}</h4>
      <p className="font-medium text-lg">
        <CountUp end={count || 0} duration={2} separator=" " />
      </p>
    </div>
  );
};

export default HighlightCard;
