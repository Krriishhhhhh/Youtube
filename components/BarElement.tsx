const BarElement = (/* { icon, title }: { icon: any; title: string } For Dynamic Values*/) => {
  return (
    <div className="flex w-32 space-x-10 p-2 rounded-xl hover:bg-slate-700">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div>
        Title
      </div>
    </div>
  );
};


export default BarElement;