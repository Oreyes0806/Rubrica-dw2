import React, { useEffect, useState } from 'react'
import SportContext from './SportContext'

export const SportProvider = ({children}) => {
    const sportDefault = [{category:'Equipo', title:'BasketBall', description:'El baloncesto es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno en cuatro períodos de cuartos de diez minutos cada uno doce minutos cada cuarto en la NBA',link:'https://app.juniorfc.co/', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kent_Benson_attempts_a_hook_shot_over_Ken_Ferdinand.jpg/275px-Kent_Benson_attempts_a_hook_shot_over_Ken_Ferdinand.jpg'},
    { category:'Equipo', title:'Futbol', description:'El fútbol, futbol​ o balompié​  es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno, mientras los árbitros se ocupan de que las normas se cumplan correctamente.',link:'https://www.nba.com/lakers/los-lakers-homepage', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/275px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg'},
    { category:'Mesa', title:'Ping Pong', description:'El tenis de mesa  es un deporte de raqueta que se disputa entre dos jugadores o dos parejas. Es un deporte olímpico desde Seúl 1988,y el deporte con mayor número de practicantes',link:'https://es.wikipedia.org/wiki/Tenis_de_mesa', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2012_Summer_Olympics_Men%27s_Team_Table_Tennis_Final_1.jpg/275px-2012_Summer_Olympics_Men%27s_Team_Table_Tennis_Final_1.jpg'},
    { category:'Mesa', title:'Ajedrez', description:'El ajedrez es un juego de tablero entre dos contrincantes donde cada uno dispone de dieciséis piezas móviles que se desplazan sobre un tablero capturando piezas del jugador contrario',link:'https://es.wikipedia.org/wiki/Ajedrez', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Opening_chess_position_from_black_side.jpg/275px-Opening_chess_position_from_black_side.jpg'},
    {category:'Motor', title:'Motocross', description:'Motocross1​ o motocrós es una forma de competición de motocicletas en todo terreno celebrada en circuitos cerrados. El deporte fue evolucionando desde las pruebas celebradas en el Reino Unido.',link:'https://es.wikipedia.org/wiki/Motocross', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MotoX_racing03_edit.jpg/220px-MotoX_racing03_edit.jpg'},
    { category:'Equipo', title:'Futbol Americano', description:'El fútbol americano es un deporte nacido hace más de cien años en EE. UU. que se expandió a toda Norteamérica, derivado del rugby inglés. Es uno de los deportes de contacto más competitivos de EE. UU.',link:'https://www.espn.com.co/futbol-americano/', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bastien_Pereira_.jpg/275px-Bastien_Pereira_.jpg'},
    { category:'Mesa', title:'Billar', description:'El billar es un deporte de precisión que se practica impulsando con un taco un número variable de bolas, en una mesa. Tuvo la carta olímpica para los Juegos Olímpicos de 2004.',link:'https://es.wikipedia.org/wiki/Billar', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/London_-_Royal_Automobile_Club_-_2976.jpg/220px-London_-_Royal_Automobile_Club_-_2976.jpg'},
    { category:'Motor', title:'Carrera de motos', description:'El deporte de las carreras de motocicletas incluye las carreras de motocicletas en carretera y las carreras todoterreno, ya sea en circuitos o en pistas abiertas, y las carreras en pista. ',link:'https://en.wikipedia.org/wiki/Motorcycle_racing',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aleix_Espargar%C3%B3_leads_the_pack_2021_Sachsenring.jpg/250px-Aleix_Espargar%C3%B3_leads_the_pack_2021_Sachsenring.jpg'},
    { category:'Motor', title:'Nascar', description:'La National Association for Stock Car Auto Racing (en español Asociación Nacional de Carreras de Autos de Serie), más conocida simplemente por sus siglas NASCAR, es la categoría automovilística más comercial y popular de los Estados Unidos, ',link:'https://es.wikipedia.org/wiki/NASCAR',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NASCAR_logo_2017.svg/220px-NASCAR_logo_2017.svg.png' },
]
    const [Sports, setSports] = useState([])
    useEffect(() => {
      setSports(sportDefault)
    }, [])
    
  return (
    <SportContext.Provider value={{Sports, setSports}}>
        {children}
    </SportContext.Provider>
  )
}
