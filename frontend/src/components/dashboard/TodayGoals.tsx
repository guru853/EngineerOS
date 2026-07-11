function TodayGoals() {
    return (
        <div className="bg-white rounded-xl shadow border p-6">

            <h2 className="text-xl font-bold mb-4">
                🎯 Today's Goals
            </h2>

            <div className="space-y-3">

                <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Finish React Dashboard
                </label>

                <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Solve 3 DSA Problems
                </label>

                <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Revise DBMS
                </label>

                <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Update Resume
                </label>

            </div>
        </div>
    );
}

export default TodayGoals;