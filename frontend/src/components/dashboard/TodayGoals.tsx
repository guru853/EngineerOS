import { Target } from "lucide-react";

function TodayGoals() {
    const goals = [
        "Finish React Dashboard",
        "Solve 3 DSA Problems",
        "Revise DBMS",
        "Update Resume",
    ];

    return (
        <div
            className="
        bg-white
        dark:bg-slate-800
        border
        border-gray-200
        dark:border-slate-700
        rounded-xl
        p-6
        shadow
        transition-all
        duration-300
        hover:shadow-xl
      "
        >
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <Target className="text-pink-500" size={22} />
                Today's Goals
            </h2>

            <div className="space-y-4">
                {goals.map((goal, index) => (
                    <label
                        key={index}
                        className="
              flex
              items-center
              gap-3
              cursor-pointer
              text-slate-700
              dark:text-slate-300
              hover:text-blue-600
              dark:hover:text-white
              transition
            "
                    >
                        <input
                            type="checkbox"
                            className="h-4 w-4 accent-blue-500"
                        />

                        <span>{goal}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default TodayGoals;