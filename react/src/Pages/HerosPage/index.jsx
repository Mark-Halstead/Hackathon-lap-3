import React, { useState, useEffect } from 'react';

import {  HeroCard } from '../../components';
import superheros from '../../assets/superheros';

const HerosPage = () => {

    const [hero1, setHero1] = useState([]);
    const [hero2, setHero2] = useState([]);
    const[heros, setHeros] = useState([])
    
   

    

    useEffect(() => {
        // async function loadHeros(id1, id2) {
        //     const options = {
        //         method: "GET",
        //         headers: { 'Content-Type': 'application/json' }
        //     }
        //     const response = await fetch(`https://superheroapi.com/api/10161212007137868/${id1}`, options);
        //     const data = await response.json();
        //     setHero1(data);
        //     const res = await fetch(`https://superheroapi.com/api/10161212007137868/${id2}`, options);
        //     const hero = await res.json();
        //     setHero2(hero);
            
        // };
        
          function loadHeros(id1, id2) {
            const h = superheros.filter(s => s.id == id1)
            
            setHero1(h);
            
           const h2 = superheros.filter(s => s.id == id2)
            setHero2(h2);
            
        };
        const id1 = Math.floor(Math.random() * 11)
        console.log(id1)
        const id2 = Math.floor(Math.random() * 11)
        loadHeros(id1, id2);
        setHeros([hero1[0], hero2[0]])
        console.log(heros)
    }, [])

    function displayHeros() {
        return heros
                .map(s => <HeroCard key={s.id} id={s.id} name={s.name} photo = {s.image.url}/>)
    }

    return <main className="hero-main">
        <h1>Should they date?</h1>
              
        <div className="hero-holder">
            { displayHeros() }
        </div>
    </main>
};

export default HerosPage;
