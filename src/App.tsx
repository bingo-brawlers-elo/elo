import {useEffect, useState} from 'react'
import './App.css'
import {loadData, Match} from "./utils/load-data.ts";
import {EloList} from "./components/EloList.tsx";
import {useCsvData} from "./hooks/csv-data-hook.ts";
import {MatchList} from "./components/MatchList.tsx";

function App() {
    const eloData = useCsvData();

  return (
    <>
        <h1>Bingo Brawlers Elo</h1>
        <h2>Rank</h2>
        <EloList data={eloData}/>
        <h2>Season 2 Matches</h2>
        <MatchList data={eloData} type={'competiton'}/>
        <h2>Season 2 Practice Matches</h2>
        <MatchList data={eloData} type={'practice'}/>
        <h2>What is this?</h2>
        <p>
        This shows the elo scores based on the practice and season 2 matches above. There <a href={'https://docs.google.com/spreadsheets/d/12mc-zRMfN1GbnATjUiZJ_BN8M7V1E2kHiHn0EMHvrCQ/edit#gid=1099556932'}>  pulled from this sheet</a>,
            which was aggregated by <em>Helios:23.5 Kenneth:5.5</em> on discord (thanks).
        The more matches, the more "accurate" the number would be.
        </p>
        <p>It's all just in good fun, anyway. I made it because I was curious. If you've got ideas and time, <a href={'https://github.com/bingo-brawlers-elo/brawlers-elo.github.io'} >send patches</a> ♥</p>
    </>
  )
}

export default App
