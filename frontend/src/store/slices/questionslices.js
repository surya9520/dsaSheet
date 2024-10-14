import { FaSort } from "react-icons/fa"; // Import an icon from a library

export const columnsdata = (handleOpen, approach, handleSolutionClick) => [
  {
    Header: "S.NO",
    accessor: (row, index) => index + 1,
    id: "serialNumber",
    disableSortBy: true,
  },
  {
    Header: "Question",
    accessor: "questionName",
    className: 'w-80',
    disableSortBy: true,
  },
  {
    Header: "Platform",
    accessor: "platform",
    disableSortBy: true,
  },
  {
    Header: "Link",
    accessor: "link",
    Cell: ({ row }) => (
      <a className="text-blue-600 hover:text-blue-800 underline" href={row.original.link} target="_blank" rel="noopener noreferrer">
        Click
      </a>
    ),
    disableSortBy: true,
  },
  {
    Header: "Solution-Video",
    accessor: "solutionVideoLink",
    Cell: ({ row }) => (
      <a className="text-green-600 hover:text-green-800 underline" href={row.original.solutionVideoLink} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    ),
    disableSortBy: true,
  },
  {
    Header: "Solution-Article",
    accessor: "solutionArticleLink",
    Cell: ({ row }) => (
      <a className="text-red-600 hover:text-red-800 underline" href={row.original.solutionArticleLink} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    ),
    disableSortBy: true,
  },
  {
    Header: (
      <div className="flex items-center">
        <span>Complexity</span>
        <FaSort className="ml-1" />
      </div>
    ),
    accessor: "complexity",
    sortType: (a, b) => {
      const complexityOrder = { easy: 1, medium: 2, hard: 3 };
      return complexityOrder[a.original.complexity] - complexityOrder[b.original.complexity];
    },
    Cell: ({ row }) => (
      <span
        className={`py-1 px-3 rounded-full text-xs ${
          row.original.complexity === "easy"
            ? "bg-green-100 text-green-600"
            : row.original.complexity === "medium"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {row.original.complexity}
      </span>
    ),
  },
  {
    Header: "Companies",
    accessor: "companyTags",
    disableSortBy: true,
  },
  {
    Header: "Data Structure",
    accessor: "datastructureTags",
    disableSortBy: true,
  },
  {
    Header: "Solution",
    accessor: "questionId",
    Cell: ({ row }) => (
      <div className="flex space-x-1 overflow-x-auto max-w-xs">
        <button
          onClick={() => handleOpen(row.original.questionName, row.original._id)}
          className="bg-blue-500 text-white font-semibold py-1 px-1 rounded hover:bg-blue-600 text-sm whitespace-nowrap"
        >
          + Add
        </button>
        {approach.map((value) =>
          value.map((approachItem, index) =>
            approachItem.questionId === row.original._id && (
              <button
                key={approachItem._id}
                className="bg-blue-500 text-white font-semibold py-1 px-1 rounded hover:bg-blue-600 text-sm whitespace-nowrap"
                onClick={() => handleSolutionClick(row.original.questionName, approachItem._id)}
              >
                Approach {index + 1}
              </button>
            )
          )
        )}
      </div>
    ),
    disableSortBy: true,
  },
];
