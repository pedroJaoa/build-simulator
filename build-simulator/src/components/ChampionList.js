import React, { useState, useEffect } from 'react'

export default function ChampionList() {

  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setChampions((Object.keys(data.data)))});
 }, [])

 const championList = champions.map((champion, index) => <li key={ index } >{ champion }</li>)

  return (
    <div>
      <ul>
        { championList }
      </ul>
    </div>
  )
}
