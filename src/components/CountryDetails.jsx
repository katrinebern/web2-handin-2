function CountryDetails({ country }) {
  if (!country) {
    return (
      <section className="country-details">
        <h2>No country selected</h2>
        <p>Click on a country to see more information.</p>
      </section>
    );
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No information";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "No information";

  return (
    <section className="country-details">
      <div className="details-header">
        <div>
          <p className="country-region">{country.region}</p>
          <h2>{country.name.common}</h2>
        </div>

        <img
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="flag-large"
        />
      </div>

      <p>
        <strong>Official name:</strong> {country.name.official}
      </p>

      <p>
        <strong>Capital:</strong>{" "}
        {country.capital ? country.capital[0] : "No capital"}
      </p>

      <p>
        <strong>Region:</strong> {country.region}
      </p>

      <p>
        <strong>Subregion:</strong> {country.subregion || "No information"}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country.population.toLocaleString("da-DK")}
      </p>

      <p>
        <strong>Languages:</strong> {languages}
      </p>

      <p>
        <strong>Currencies:</strong> {currencies}
      </p>

      <p>
        <strong>Timezones:</strong> {country.timezones.join(", ")}
      </p>
    </section>
  );
}

export default CountryDetails;
