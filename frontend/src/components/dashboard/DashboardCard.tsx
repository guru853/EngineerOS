type DashboardCardProps = {
    title: string;
    value: string | number;
    color?: string;
};

function DashboardCard({
    title,
    value,
    color = "bg-blue-500",
}: DashboardCardProps) {
    return (
        <div
            className="
        relative
        overflow-hidden
        rounded-xl
        p-5
        shadow
        border
        border-gray-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-800
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
      "
        >
            {/* Left Color Bar */}
            <div
                className={`absolute left-0 top-0 h-full w-1 ${color}`}
            />

            <p className="text-sm text-gray-500 dark:text-slate-400">
                {title}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                {value}
            </h2>
        </div>
    );
}

export default DashboardCard;