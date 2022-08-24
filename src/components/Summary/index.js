import React, { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

const Summary = ({ report, selectedCountryId }) => {
  const [mapData, setMapData] = useState({});
  console.log("SELECTEDCOUNTRYID", selectedCountryId);
  useEffect(() => {
    if (selectedCountryId) {
      const map = require(`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`);
      setMapData(map);
    }
  }, [selectedCountryId]);

  return (
    <div className="grid grid-cols-3 gap-5 mt-8">
      <div className="col-span-2">
        <LineChart data={report} />
      </div>
      <div className="col-span-1">
        <HighMaps mapData={mapData} />
      </div>
    </div>
  );
};

export default Summary;
