import React from "react";
import HighlightCard from "./HighlightCard";

const Highlight = ({ report }) => {
  const data = report && report.length ? report[report.length - 1] : [];
  console.log(data);
  const summary = [
    {
      title: "So ca nhiem",
      count: data.Confirmed,
      type: "confimed",
    },
    {
      title: "So ca khoi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "So ca tu vong",
      count: data.Deaths,
      type: "death",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {summary.map((item, index) => (
        <HighlightCard
          key={index}
          title={item.title}
          count={item.count}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Highlight;
