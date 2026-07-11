import {
    FileText,
    Brain,
    BookOpen,
    CheckCircle,
} from "lucide-react";

function RecentActivity() {
    const activities = [
        {
            icon: <FileText size={18} className="text-blue-500" />,
            title: "Created Resume",
            time: "10 mins ago",
        },
        {
            icon: <Brain size={18} className="text-purple-500" />,
            title: "Asked AI about React",
            time: "30 mins ago",
        },
        {
            icon: <BookOpen size={18} className="text-green-500" />,
            title: "Completed DBMS Study",
            time: "1 hour ago",
        },
        {
            icon: <CheckCircle size={18} className="text-pink-500" />,
            title: "Finished Today's Goals",
            time: "Yesterday",
        },
    ];

    return (
        <div
            className="
        mt-6
        rounded-xl
        border
        border-gray-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-800
        p-6
        shadow
        transition-all
        duration-300
        hover:shadow-xl
      "
        >
            <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
                📋 Recent Activity
            </h2>

            <div className="space-y-4">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="
              flex
              items-center
              justify-between
              border-b
              border-gray-200
              dark:border-slate-700
              pb-3
            "
                    >
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>

                        <span className="text-sm text-gray-500 dark:text-slate-500">
                            {item.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentActivity;