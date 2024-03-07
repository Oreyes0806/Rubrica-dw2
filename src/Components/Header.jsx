import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 py-4 border-b-2 mb-4'>
      <div className='flex gap-2 items-center '>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACqUlEQVR4nN1XTW/TQBB9LSkHOMCFjz8ASL0AxySeXVSJwoVjDxRUCQQXuDb8CSoghP9RSA9VFSTfSwP3CM5USROa7IK4GU0zTlKzTuzaEhJPGsnesWee58u7gBsFABUA2wAaGWVbbLHNxKgACADs5kBgV2ytpyGwA2AP+aEpNhOHuwfAz5GALzadaak4wj2FQDCvtb2rlK0pZbZYiGyVyN5hXUICx9Ky4wi37yKglL1JZL4oZQMWInvAMr43n8tlez2GgB+XFt+h/GtNa3OLyNjQ2VB+3hvKeI2f8byBTkBgtObPIqC1vSxf2iUyn0JnTIplwjnrukS2Uyyai7kRUEf5Zifm5eJicJrI7kcJEJnvotuQ9FRzIaB1UAjzTGS/AsGcUva1IwKvhjrzTe7bKyvBqcwESqX+tYmCa3je4AKRXeZrLjgWvlbK3BZdY1yY/SuZCRD1SxL+VSQEPzt851fxn0bA8/pXkxCoA2glrwGOin0zqwa4E2bUAPt8zxdPZCo9cxEQh2/F6EZ8F9j9FF3wXHw+4hsenx9koeUaxUtL5lI4B5Qye3FzQHRxcyAcxS3xtQlgLnyALx5LSPihdnQ883RLOgmJBsoxdttie1O+fOTchXcAOhKdEbS2N5Qyzbh/Aesc/wK20QVQQwo8kDCFbTSBYF66oEpk6kM5+hsux/wNy2LrfhoCZwEcSriygrvsB4AzaV98IcwfRtafTtl+sW4SayfZjoVYAPARwO8IiaQE1uTdRtoN6STOC4lAOqQULcwI5iXndXmHnZ9DRizItu1QjB5IW0W/vim6QHK+nuXLXeAiWpV26kT2eD1Zq0m1py64tIiOVuce8r8gUIg5ovUcKejlcSTL84h2oiNZ3ke0qUeyJIieaNJK5iPetKmXVKLj+Rj+AD/Lal5CZPB8AAAAAElFTkSuQmCC"/>
        <h1 className='text-2xl font-bold'>BestSports</h1>
      </div>
      <nav className='w-1/2 flex justify-end'>
        <ul className='flex justify-around gap-8 pr-4 items-center w-1/2'>
          <li className='text-base font-medium transition-all hover:text-cyan-500 hover:text-lg'><Link to={'/'}>Sports</Link></li>
          <li className='text-base font-medium transition-all  hover:text-cyan-500 hover:text-lg'><Link to={'/createSport'}>Create Sport</Link></li>
        </ul>
      </nav>
    </header>
  )
}
