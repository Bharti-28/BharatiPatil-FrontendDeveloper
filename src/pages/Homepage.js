import { useState, useEffect } from "react";
import { Loading } from "../components";

export default function Homepage(){
    const [company, setCompany] = useState(null)

    useEffect(() => {
        const fetchCompany = async() => {
            const res = await fetch("https://api.spacexdata.com/v4/company")
            const data = await res.json()
            setCompany(data)
        }

        fetchCompany()
    }, []);

    return <>
       {!company ? <Loading/> : <section className="showcase">
       <div className="overlay">
        <article>
            <h1 className="heading text-center capitalize">All The SpaceX Data in one place</h1>

            <article>
                <h2>Headquarters</h2>
                <ul>
                    <li>{company.headquarters.address}</li>
                    <li>{company.headquarters.city}</li>
                    <li>{company.headquarters.state}</li>
                </ul>
            </article>

            <article>
            <h2>Useful Links</h2>
                <ul>
                    <li><a href={company.links.website}>Website</a></li>
                    <li><a href={company.links.flickr}>Flickr</a></li>
                    <li><a href={company.links.twitter}>Twitter</a></li>
                    <li><a href={company.links.elon_twitter}>Elon Twitter</a></li>
                </ul>
            </article>

            <article>
                <h2>About</h2>
                <ul>
                    <li>{company.name}</li>
                    <li>{company.founder}</li>
                    <li>{company.founded}</li>
                    <li>{company.employees}</li>
                    <li>{company.vehicles}</li>
                    <li>{company.launch_sites}</li>
                    <li>{company.test_sites}</li>
                    <li>{company.ceo}</li>
                    <li>{company.cto}</li>
                    <li>{company.coo}</li>
                    <li>{company.cto_propulsion}</li>
                    <li>{company.valuation.toLocaleString()}</li>
                </ul>
            </article>

            <p>{company.summary}</p>
        </article>
       </div>
     </section>}
    </>
}