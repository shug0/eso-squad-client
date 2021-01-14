import React, { useState} from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import GroupsList from "../../components/GroupsList/GroupsList";
import SelectItem from "../../constants/models/SelectItem";

function HomePage() {
  const [search, setSearch] = useState('')

  const handleChange = (values: Array<SelectItem>) => {
    console.log({values})
    setSearch(values.map(item => item.value).join(","))
  }

  return (
      <>
        <SearchInput handleChange={handleChange} />
        <GroupsList search={search} />
      </>
  );
}


export default HomePage;
