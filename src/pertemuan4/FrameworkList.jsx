import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
                <div
                    key={item.id}
                    className="border p-4 mb-4 rounded-lg shadow-md bg-white"
                >
                    <h2 className="text-lg font-bold text-gray-800">
                        {item.name}
                    </h2>

                    <p className="text-gray-600">{item.description}</p>

                    {/* ✅ Nested object (details) */}
                    <p className="text-blue-600 mt-2">
                        Official Website:{" "}
                        <a
                            href={item.details.officialWebsite}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {item.details.officialWebsite}
                        </a>
                    </p>

                    <p className="text-gray-700">
                        Developer: {item.details.developer}
                    </p>

                    <p className="text-sm text-gray-500">
                        Release Year: {item.details.releaseYear}
                    </p>

                    {/* ✅ Tags */}
                    <div className="mt-2 flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-sm px-2 py-1 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}