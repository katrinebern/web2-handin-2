function CountryList({ countries, onSelectCountry }) {
  return (
    <section className="country-list">
      <h2>Country list</h2>

      <div className="country-grid">
        {countries.map((country) => (
          <button
            className="country-card"
            key={country.cca3}
            onClick={() => onSelectCountry(country)}
          >
            <div>
              <p className="country-region">{country.region}</p>
              <h3>{country.name.common}</h3>
            </div>

            <img
              src={country.flags.png}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              className="flag-small"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default CountryList;
