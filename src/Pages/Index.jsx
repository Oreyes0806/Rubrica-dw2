import React, { useContext } from 'react'
import { FilteredByCategory } from '../Components/FilteredByCategory'
import SportContext from '../Context/SportContext'

export const Index = () => {
  const {Sports} = useContext(SportContext)
  return (
    <>
        <FilteredByCategory Sports={Sports}/>
    </>
  )
}
