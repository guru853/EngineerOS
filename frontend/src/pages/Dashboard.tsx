import DashboardCard from "../components/dashboard/DashboardCard";
import TodayGoals from "../components/dashboard/TodayGoals";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
    return (
        <div className="p-8">

            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white">
                    Welcome back, Guru 👋
                </h1>

                <p className="text-slate-400 mt-2 text-lg">
                    Your AI engineering workspace is ready.
                </p>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <DashboardCard
                    title="Study Hours"
                    value="12 hrs"
                    color="bg-blue-500"
                />

                <DashboardCard
                    title="Notes"
                    value="24"
                    color="bg-emerald-500"
                />

                <DashboardCard
                    title="AI Chats"
                    value="68"
                    color="bg-purple-500"
                />

                <DashboardCard
                    title="Projects"
                    value="3"
                    color="bg-orange-500"
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