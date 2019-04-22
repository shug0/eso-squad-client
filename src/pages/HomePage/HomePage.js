import React, { PureComponent } from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import GroupsList from '../../components/GroupsList/GroupsList'

class HomePage extends PureComponent {
  render () {
    return (
      <>
        <Header />
        <SearchInput />
        <GroupsList />
      </>
    )
  }
}

export default HomePage
