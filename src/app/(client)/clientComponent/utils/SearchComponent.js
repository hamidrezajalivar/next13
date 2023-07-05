const SearchComponent=()=>{
    return (
     <>
          <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 pr-10 pl-4 leading-tight rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-4 h-4 fill-current text-gray-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.707 10.293a1 1 0 0 1-1.414 1.414l-2.08-2.08a3.5 3.5 0 1 1 .708-.708l2.08 2.08zm2.965 2.965a1 1 0 0 1-1.414 1.414l-3.336-3.336a5.5 5.5 0 1 1 .708-.708l3.336 3.336z" />
                  </svg>
                </div>
              </div>
     </>
    )
}
export default SearchComponent;