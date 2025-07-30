function Dashboard() {
  const league = [
    { rank: 1, team: { id: 1, name: "Celtic" }, points: 45, all: { played: 20, win: 14, draw: 3, lose: 3 }, goalsDiff: 28 },
    { rank: 2, team: { id: 2, name: "Rangers" }, points: 42, all: { played: 20, win: 13, draw: 3, lose: 4 }, goalsDiff: 24 },
    { rank: 6, team: { id: 3, name: "Motherwell" }, points: 32, all: { played: 20, win: 9, draw: 5, lose: 6 }, goalsDiff: 8 },
    { rank: 10, team: { id: 4, name: "Ross County" }, points: 18, all: { played: 20, win: 4, draw: 6, lose: 10 }, goalsDiff: -12 }
  ];

  const fixtures = [
    {
      fixture: { id: 1, date: "2025-08-01T15:00:00Z" },
      teams: {
        home: { name: "Motherwell" },
        away: { name: "St. Mirren" }
      }
    },
    {
      fixture: { id: 2, date: "2025-08-08T15:00:00Z" },
      teams: {
        home: { name: "Hearts" },
        away: { name: "Motherwell" }
      }
    },
    {
      fixture: { id: 3, date: "2025-08-15T15:00:00Z" },
      teams: {
        home: { name: "Motherwell" },
        away: { name: "Aberdeen" }
      }
    }
  ];

  return (
    <div className="grid gap-6">
      {/* League Table */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold text-[#800000] mb-3">
          SPFL Premiership Table (Test Data)
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
          Upcoming Fixtures (Test Data)
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
