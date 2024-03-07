import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const FilteredByCategory = ({Sports}) => {
    const [CategoryOption, setCategoryOption] = useState('All')
    const [FilteredByCategory, setFilteredByCategory] = useState([])

    const CategoriesOnly = Array.from(new Set(Sports.map(sport=>sport.category)))


    const handleChangeOption = (e)=>{
        setCategoryOption(e.target.value)
    }
    const loadSportByCategories = ()=>{
        if(CategoryOption !== 'All'){
            setFilteredByCategory(Sports.filter(sport => sport.category === CategoryOption))
        }else{
            setFilteredByCategory(Sports)
        }
    }
    
    useEffect(() => {
      loadSportByCategories()
    }, [CategoryOption, Sports])
    
  return (
    <div className='flex flex-col items-center'>
        <div className='flex w-11/12 border-b-2 border-blue-300  my-2'>
            <select name="category" onChange={handleChangeOption} className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500 mb-1'>
                <option value="All">All</option>
                {
                    CategoriesOnly.map(category => <option key={category} value={category}>{category}</option>)
                }
            </select>
        </div>
        <div className='flex flex-wrap justify-around items-center gap-8'>
            {
                FilteredByCategory.map(sport => <Card image={sport.image} title={sport.title} description={sport.description} equipo={sport.link} category={sport.category} />)
            }
        </div>
    </div>
  )
}
