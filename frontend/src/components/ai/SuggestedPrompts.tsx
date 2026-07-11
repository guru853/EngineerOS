function SuggestedPrompts() {

    const prompts = [

        "Explain React",

        "Solve Aptitude",

        "Resume Help",

        "DBMS Notes",

        "AI Interview Questions",

        "Python Program"

    ];

    return (

        <div className="mt-6">

            <h2 className="font-semibold mb-3">
                Suggested Prompts
            </h2>

            <div className="flex flex-wrap gap-3">

                {prompts.map((prompt) => (
                    <button
                        key={prompt}
                        className="px-4 py-2 rounded-full border hover:bg-blue-600 hover:text-white transition"
                    >
                        {prompt}
                    </button>
                ))}

            </div>

        </div>

    );

}

export default SuggestedPrompts;