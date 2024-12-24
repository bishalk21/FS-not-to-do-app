export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          "Total Users",
          "Active Members",
          "Upcoming Matches",
          "Recent Activities",
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-500">{item}</h3>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-500">No recent activities to display.</p>
      </div>
    </>
  );
}
