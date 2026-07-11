import DashboardCard from "../components/dashboard/DashboardCard";
import TodayGoals from "../components/dashboard/TodayGoals";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
    return (
        <div className="p-8">

            {/* Welcome Section */}
            <h1 className="text-4xl font-bold">
                Welcome back, Guru 👋
            </h1>

            <p className="text-gray-500 mt-2">
                EngineerOS is ready.
            </p>

            {/* Quick Actions */}
            <QuickActions />

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                <DashboardCard
                    title="Study Hours"
                    value="12 hrs"
                />

                <DashboardCard
                    title="Notes"
                    value="24"
                />

                <DashboardCard
                    title="AI Chats"
                    value="68"
                />

                <DashboardCard
                    title="Projects"
                    value="3"
                />

            </div>

            {/* Today's Goals */}
            <div className="mt-8">
                <TodayGoals />
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
                <RecentActivity />
            </div>

        </div>
    );
}

export default Dashboard;