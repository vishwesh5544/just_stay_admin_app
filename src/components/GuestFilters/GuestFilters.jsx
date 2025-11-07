import ButtonComponent from "../BasicComponent/ButtonComponent"
import SearchComponent from "../BasicComponent/SearchComponent"
import SelectComponent from "../BasicComponent/SelectComponent"

const GuestFilters = () => {
  return(
    <div className="grid grid-cols-8 gap-4 items-center">
      <div className="col-span-5">
        <SearchComponent />
      </div>
      <div>
        <SelectComponent />
      </div>
      <div>
        <SelectComponent />
      </div>
      <div>
        <ButtonComponent />
      </div>
    </div>
  )
}

export default GuestFilters