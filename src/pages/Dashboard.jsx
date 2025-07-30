import { useEffect, useState } from "react";

function Dashboard() {
  const [league, setLeague] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const headers = {
      "X-RapidAPI-Key": import.meta.env.VITE_API_FOOTBALL_KEY,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    };

    const fetchData = async () => {
      try {
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
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-6">
      {/* League Table */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold text-[#800000] mb-3">
          SPFL Premiership Table
        </h2>
        <table className="w-full text-sm border">
          <thead className="bg-[#800000] text-[#FFB612] uppercase">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2 text-left">Club</th>
              <th className="p-2">Pts</th>
              <th className="p-2">P</th>
              <th className="p-2">W</th>
              <th className="p-2">D</th>
              <th className="p-2">L</th>
              <th className="p-2">GD</th>
            </tr>
          </thead>
          <tbody>
            {league.map((team) => (
              <tr
                key={team.team.id}
                className={
                  team.team.name === "Motherwell"
                    ? "bg-[#FFB612]/20 font-semibold"
                    : "hover:bg-gray-50"
                }
              >
                <td className="p-2 text-center">{team.rank}</td>
                <td className="p-2">{team.team.name}</td>
                <td className="p-2 text-center">{team.points}</td>
                <td className="p-2 text-center">{team.all.played}</td>
                <td className="p-2 text-center">{team.all.win}</td>
                <td className="p-2 text-center">{team.all.draw}</td>
                <td className="p-2 text-center">{team.all.lose}</td>
                <td className="p-2 text-center">{team.goalsDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Fixtures */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold text-[#800000] mb-3">
          Upcoming Fixtures
        </h2>
        <ul className="space-y-3">
          {fixtures.map((match) => (
            <li
              key={match.fixture.id}
              className="p-3 border border-gray-200 rounded flex justify-between items-center"
            >
              <div>
                <strong>{match.teams.home.name}</strong> vs{" "}
                <strong>{match.teams.away.name}</strong>
              </div>
              <div className="text-sm text-gray-700">
                {new Date(match.fixture.date).toLocaleString("en-GB", {
                  weekday: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "numeric",
                  month: "short",
                  timeZone: "Europe/London"
                })}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
