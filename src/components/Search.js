import { Input } from 'antd'
import React from 'react'

function Search({handleSearch}) {
  return (
    <Input onChange={handleSearch}/>
  )
}

export default Search