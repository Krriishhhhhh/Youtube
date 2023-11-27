const SeachBar = () => {
  return (
    <div className="m-2  w-96 flex rounded-3xl border  border-gray-400 p-0.5  text-gray-900">
      <input
        className="w-full bg-slate-950 outline-none border-none p-1 placeholder-gray-500  "
        placeholder="Search"
      ></input>
      <div className="pr-2 pt-2">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SeachBar;
