const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // console.log(countries);
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name.common}</h2>
        <p> ${country.capital} </P>
        <button onClick = "loadCountryByName('${country.name.common}')">Details</button>

        `;
  
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.official;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
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
    console.log(country);

}

