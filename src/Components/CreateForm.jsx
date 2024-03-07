import React, { useContext, useState } from 'react'
import SportContext from '../Context/SportContext'
import { useNavigate } from 'react-router-dom'

export const CreateForm = () => {
  const {Sports, setSports} = useContext(SportContext)
  const [Error, setError] = useState('')
  const navigate = useNavigate()

  const [newSport, setNewSport] = useState({title:'', image:'', link:'', category:'none', description:''})
  
  const CategoriesOnly = Array.from(new Set(Sports.map(sport=>sport.category)))
  const handleChangeInputs = (e)=>{
    const {name, value} = e.target
    setNewSport(()=>({
      ...newSport,
      [name]:value
    })
    )
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!titleRegex.test(newSport.title)){
      setError('Opss: Error en el title debe tener 3-20 caracteres!!')
      return
    }else if(!descriptionRegex.test(newSport.description)){
      setError('Opss: Error en la description debe tener 50-200 caracteres!!')
      return
    }else if(!linkRegex.test(newSport.image)){
      setError('Opss: Error en el link Image debe tener 10-50 caracteres!!')
      return
    }else if(!linkRegex.test(newSport.link)){
      setError('Opss: Error en el link Equipo debe tener 10-50 caracteres!!')
      return
    }
    setSports([...Sports, newSport])
    setNewSport({title:'', image:'', equipo:'', category:'', description:''})
    setError('')
    navigate('/')
  }
  const titleRegex = /^.{3,20}$/;
  const descriptionRegex = /^.{50,200}$/;
  const linkRegex = /^.{10,50}$/;
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 border border-cyan-500  text-cyan-500 p-4 rounded-md'>
        <p className='title'>Create Sport</p>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2'>
        <div className='flex flex-col w-1/2 gap-2'>
          <label className='font-semibold text-base text-cyan-500' htmlFor="title">Title:</label>
          <input name='title' value={newSport.title} onChange={handleChangeInputs} placeholder='Nasca' type="text" className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' />
        </div>
        <div className='flex flex-col w-1/2 gap-2'>
          <label className='font-semibold text-base  text-cyan-500' htmlFor="">Link Image:</label>
          <input name='image' value={newSport.image} onChange={handleChangeInputs} placeholder='Www.asasa.as' type="text" className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' />
        </div>
        </div>
        <div className='flex gap-2'>
        <div className='flex flex-col w-1/2 gap-2'>
          <label className='font-semibold text-base  text-cyan-500' htmlFor="">Equipo:</label>
          <input name='link' value={newSport.link} onChange={handleChangeInputs} placeholder='Www.asasa.sas' type="text" className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' />
        </div>
        <div className='flex flex-col w-1/2 gap-2'>
          <label className='font-semibold text-base  text-cyan-500' htmlFor="">Category:</label>
          <select name="category" onChange={handleChangeInputs} className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' >
            <option value="none" >Elige una Opcion</option>
            {
              CategoriesOnly.map(category=> <option key={category} value={category}>{category}</option>)
            }
          </select>
        </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-semibold text-base  text-cyan-500' htmlFor="">Description:</label>
          <textarea name="description" value={newSport.description} onChange={handleChangeInputs}  className='p-2 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500 resize-none' cols="6" rows="6" placeholder='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, praesentium incidunt ab consequuntur, voluptatem delectus quaerat, soluta consequatur obcaecati fuga iusto quis sunt velit doloribus cum aperiam aut modi. Incidunt?'></textarea>
        </div>
        {
          Error&&(
            <span className='font-semibold text-sm text-red-500'>{Error}</span>
          )
        }
        <button className='border w-32 h-8 border-cyan-500 rounded-md text-lg font-semibold text-cyan-500 transition-colors hover:border-2 hover:font-bold' type="submit">Create</button>
      </div>
    </form>
  )
}
