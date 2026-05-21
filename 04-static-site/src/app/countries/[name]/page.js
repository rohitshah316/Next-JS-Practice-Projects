async function getCountry(name){
    const res=await fetch(`https://restcountries.com/v3.1/name/${decodeURIComponent(name)}?fields=name,flags,population,region,capital`);

    const data=await res.json();
    return data[0];
}

export default async function CountryPage({params}){
    const {name}=await params;
   
    const country=await getCountry(name);


    return(
        <main>
            <img src={country.flags.png} width='100'
            alt={country.name.common}
            />
            <h1>{country.name.common}</h1>
            <p>Population:{country.population}</p>
            <p>Region:{country.region}</p>
            <p>Region:{country.capital}</p>
        </main>
    )
}