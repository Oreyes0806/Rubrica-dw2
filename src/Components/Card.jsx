import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({image,title,description,equipo,category}) => {
  return (
    <div className='flex flex-col w-1/2 border border-blue-500 box-border h-[auto] rounded-md md:w-1/4'>
      <div className='p-0'>
      <img className='aspect-video overflow-hidden rounded-md' width={'100%'} height={'250px'} src={image} alt="Imagen deporte" />
      </div>
      <div className='flex flex-col justify-center items-center px-4 py-2'>
        <h2 className='font-bold text-2xl'>{title}</h2>
        <span className='font-base text-sm'>{category}</span>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center px-4 py-2 '>
        <p className='font-base break-words text-sm'>{description}</p>
        </div>
        <div className='flex flex-col px-4 py-2 '>
          <label className='font-semibold'>Equipo:</label>
          <Link className='text-sm font-base underline break-words '>{equipo}</Link>
        </div>
    </div>
  )
}
