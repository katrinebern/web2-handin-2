import { useEffect, useState } from "react";
import CountryList from "../components/CountryList.jsx";
import CountryDetails from "../components/CountryDetails.jsx";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const countriesPerPage = 9;
  const startIndex = page * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const visibleCountries = countries.slice(startIndex, endIndex);
  const isLastPage = endIndex >= countries.length;

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,languages,currencies,timezones,cca3",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch countries");
        }

        return response.json();
      })
      .then((data) => {
        const sortedCountries = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        );

        setCountries(sortedCountries);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  }, []);

  function handleNextPage() {
    setPage(page + 1);
    setSelectedCountry(null);
  }

  function handlePreviousPage() {
    if (page > 0) {
      setPage(page - 1);
      setSelectedCountry(null);
    }
  }

  function handleSelectCountry(country) {
    setSelectedCountry(country);
  }

  return (
    <section>
      <h2>Countries</h2>

      <p>
        Browse basic country facts. Click on a country to see more information.
      </p>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 0}>
          Previous
        </button>

        <span>Page {page + 1}</span>

        <button onClick={handleNextPage} disabled={isLastPage}>
          Next
        </button>
      </div>

      {loading && <p>Loading countries...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="content">
          <CountryList
            countries={visibleCountries}
            onSelectCountry={handleSelectCountry}
          />

          <CountryDetails country={selectedCountry} />
        </div>
      )}
    </section>
  );
}

export default Countries;
