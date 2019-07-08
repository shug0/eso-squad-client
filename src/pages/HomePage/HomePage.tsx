import React, { PureComponent } from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import GroupsList from '../../components/GroupsList/GroupsList'
import SelectItem from "../../constants/models/SelectItem";

class HomePage extends PureComponent {
  state = {
    search: ''
  }

  handleChange = (values: Array<SelectItem>) => {
    this.setState({
      search: values.map((item) => item.value).join(',')
    })
  }

  render () {
    return (
      <>
        <Header />
        <SearchInput handleChange={this.handleChange} />
        <GroupsList search={this.state.search} />
      </>
    )
  }
}

export default HomePage
