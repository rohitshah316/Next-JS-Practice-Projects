import Link from 'next/link'

async function getCountries(){
    const res=await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region ');

    const data=await res.json();
    return data;
}


export default async function CountriesPage(){

    const countries=await getCountries();

    console.log(countries)
    return(
        <main>
            <h1>Countries Page</h1>

            {countries.map((country)=>(
               <Link key={country.name.common}
               href={`/countries/${encodeURIComponent(country.name.common)}`}
               >
                <div
                 
                >
                    <img src={country.flags.png} alt={country.name.common} width="100"/>
                    <h2>{country.name.common}</h2>
                    <p>Population:{country.population}</p>
                    <p>Region: {country.region}</p>
                </div>
               </Link>
            ))}
        </main>
    )
}