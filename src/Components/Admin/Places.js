import React from 'react'
import {IndividualPlace} from './IndividualPlace'

export const Places = ({places}) => {
    
    return places.map((individualPlace)=>(
        <IndividualPlace 
            key = {individualPlace.ID} 
            individualPlace= {individualPlace}
        />
    ))
}

export default Places;