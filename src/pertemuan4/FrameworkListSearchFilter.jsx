import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};
  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
                    .toLowerCase()
                    .includes(_searchTerm) ||
      framework.description
                    .toLowerCase()
                    .includes(_searchTerm) ||
      framework.details.developer
                    .toLowerCase()
                    .includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* 🔍 Search */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* 📦 Cards */}
      <div className="flex flex-wrap gap-4">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="w-72 p-4 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {item.name}
            </h2>

            <p className="text-gray-600 text-sm mb-2">{item.description}</p>

            <p className="text-sm text-gray-500 mb-1">
              👨‍💻 {item.details.developer}
            </p>

            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 text-sm hover:underline"
            >
              🌐 Visit Website
            </a>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
