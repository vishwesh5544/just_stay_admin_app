const InputComponent = ({
  isSearchIcon=false,
  placeholder="",
}) => {
  return(
    <>
      <div className={`flex items-center w-full bg-gray-100 rounded-xl px-4 py-3 shadow-sm`}>
        { isSearchIcon && <svg xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg> }

        <input 
          type="text"
          placeholder={placeholder}
          className="w-full bg-gray-100 focus:outline-none ml-3 text-gray-700 placeholder-gray-500"
        />
      </div>
    </>
  )
}

export default InputComponent