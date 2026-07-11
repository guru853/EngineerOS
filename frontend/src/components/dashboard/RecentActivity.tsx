import {
    FileText,
    Brain,
    BookOpen,
    CheckCircle,
} from "lucide-react";

function RecentActivity() {
    const activities = [
        {
            icon: <FileText size={18} />,
            title: "Created Resume",
            time: "10 mins ago",
        },
        {
            icon: <Brain size={18} />,
            title: "Asked AI about React",
            time: "30 mins ago",
        },
        {
            icon: <BookOpen size={18} />,
            title: "Completed DBMS Study",
            time: "1 hour ago",
        },
        {
            icon: <CheckCircle size={18} />,
            title: "Finished Today's Goals",
            time: "Yesterday",
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow border p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">
                📋 Recent Activity
            </h2>

            <div className="space-y-4">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between border-b pb-3"
                    >
                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>

                        <span className="text-sm text-gray-500">
                            {item.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentActivity;