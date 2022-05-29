
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p> ${country.cappital} </p>
            <button onClick="loadCountryByName('${country.name.common}')"> See Details </button>
        `;

        countriesDiv.appendChild(div);
    })

}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => displayCountryDetail(data[0]))
}
loadCountryByName();

const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4> ${country.name.common}
    <p>Population: ${country.population} </p>
    <img width="200px" src="${country.flags.png}">
    `;

}
