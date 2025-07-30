// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";

function Dashboard() {
  const [league, setLeague] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        "X-RapidAPI-Key": "ce6924e8e4211a27985c8e2d9c5a2f24",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      };

      const leagueRes = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/standings?league=179&season=2024",
        { headers }
      );
      const fixtureRes = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?team=2566&next=3",
        { headers }
      );

      const leagueData = await leagueRes.json();
      const fixtureData = await fixtureRes.json();

      setLeague(leagueData.response[0].league.standings[0]);
      setFixtures(fixtureData.response);
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-6">
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">SPFL Premiership Table</h2>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Club</th>
              <th>Pts</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
            </tr>
          </thead>
          <tbody>
            {league.map((team) => (
              <tr key={team.team.id}>
                <td>{team.rank}</td>
                <td>{team.team.name}</td>
                <td>{team.points}</td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>{team.goalsDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Upcoming Motherwell Fixtures</h2>
        <ul className="space-y-2">
          {fixtures.map((match) => (
            <li key={match.fixture.id}>
              {match.teams.home.name} vs {match.teams.away.name} — {new Date(match.fixture.date).toLocaleString()}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
