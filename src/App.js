import { useEffect, useState } from "react";
import { getContries, getReportByCountry } from "./api";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setContries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContries();
      setContries(data);
    };
    fetchData();
    setSelectedCountryId("vn");
  }, []);

  useEffect(() => {
    const handleSetReportData = async () => {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      const data = await getReportByCountry(Slug);
      data.pop();
      setReport(data);
    };
    if (selectedCountryId) {
      handleSetReportData();
    }
  }, [selectedCountryId, countries]);

  const handleOnChange = async (e) => {
    setSelectedCountryId(e.target.value);
  };
  return (
    <div className="p-3">
      <CountrySelector
        handleOnChange={handleOnChange}
        countries={countries}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </div>
  );
}

export default App;
