import InputComponent from "./InputComponent";
const SearchComponent = () => {
  return(
    <div className="w-full">
      <InputComponent
        isSearchIcon={true}
        placeholder="Search by name, email, phone, or ID..."
      />
    </div>
  )
}

export default SearchComponent;