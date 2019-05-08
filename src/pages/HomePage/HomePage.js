import React, { PureComponent } from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import GroupsList from '../../components/GroupsList/GroupsList'

class HomePage extends PureComponent {
  state = {
    search: ''
  }

  handleChange = (values) => {
    this.setState({
      search: values.map(item => item.value).join(',')
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
