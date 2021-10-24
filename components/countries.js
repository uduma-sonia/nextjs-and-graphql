export default function Countries({ countries }) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2 md:px-20">
        {countries.data.map((country, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded p-3 shadow-md hover:bg-gray-900 hover:shadow-xl break-words"
          >
            <h3
              className="font-bold text-sm md:text-base"
              style={{ color: "#f57364" }}
            >
              {country.name}
            </h3>

            <h5 className="text-sm">
              Capital: <span className="text-xs"> {country.capital} </span>{" "}
            </h5>

            <p className="text-sm">
              Continent:{" "}
              <span className="text-xs"> {country.continent.name} </span>{" "}
            </p>

            <p className="text-sm">
              Languages:
              {country.languages.map((item, index) => (
                <span key={index} className="text-xs">
                  {item.name},
                </span>
              ))}
            </p>

            <p className="text-sm">
              Currency:
              <span className="text-xs">{country.currency}</span>
            </p>

            <p className="text-sm">
              Phone:
              <span className="text-xs">+{country.phone}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
