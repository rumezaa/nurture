
import React from "react"
function CalIcon({selected}) {
    return (selected ? <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 9C2.5 7.11438 2.5 6.17157 3.08579 5.58579C3.67157 5 4.61438 5 6.5 5H18.5C20.3856 5 21.3284 5 21.9142 5.58579C22.5 6.17157 22.5 7.11438 22.5 9C22.5 9.4714 22.5 9.70711 22.3536 9.85355C22.2071 10 21.9714 10 21.5 10H3.5C3.0286 10 2.79289 10 2.64645 9.85355C2.5 9.70711 2.5 9.4714 2.5 9Z" fill="#815FB6"/>
        <path d="M2.5 18C2.5 19.8856 2.5 20.8284 3.08579 21.4142C3.67157 22 4.61438 22 6.5 22H18.5C20.3856 22 21.3284 22 21.9142 21.4142C22.5 20.8284 22.5 19.8856 22.5 18V13C22.5 12.5286 22.5 12.2929 22.3536 12.1464C22.2071 12 21.9714 12 21.5 12H3.5C3.0286 12 2.79289 12 2.64645 12.1464C2.5 12.2929 2.5 12.5286 2.5 13V18Z" fill="#815FB6"/>
        <path d="M7.5 3L7.5 6" stroke="#815FB6" stroke-width="2" stroke-linecap="round"/>
        <path d="M17.5 3L17.5 6" stroke="#815FB6" stroke-width="2" stroke-linecap="round"/>
        </svg>
         : <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="6.5" width="18" height="15" rx="2" stroke="#815FB6" stroke-width="2"/>
        <path d="M3.5 10.5C3.5 8.61438 3.5 7.67157 4.08579 7.08579C4.67157 6.5 5.61438 6.5 7.5 6.5H17.5C19.3856 6.5 20.3284 6.5 20.9142 7.08579C21.5 7.67157 21.5 8.61438 21.5 10.5H3.5Z" fill="#815FB6"/>
        <path d="M7.5 3.5L7.5 6.5" stroke="#815FB6" stroke-width="2" stroke-linecap="round"/>
        <path d="M17.5 3.5L17.5 6.5" stroke="#815FB6" stroke-width="2" stroke-linecap="round"/>
        </svg>
        )
}

export default CalIcon