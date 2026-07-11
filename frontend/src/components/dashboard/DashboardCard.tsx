type DashboardCardProps = {
    title: string;
    value: string | number;
    color?: string;
};

function DashboardCard({
    title,
    value,
    color = "bg-white",
}: DashboardCardProps) {
    return (
        <div
            className={`${color} rounded-xl shadow border p-5 transition hover:shadow-lg`}
        >
            <p className="text-gray-500 text-sm">{title}</p>

            <h2 className="text-3xl font-bold mt-2">
                {value}
            </h2>
        </div>
    );
}

export default DashboardCard;