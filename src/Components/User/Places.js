//user
import {IndividualPlace} from './IndividualPlace'
import React from 'react'

export const Places = ({products}) => { 
    
    return products.map((individualProduct)=>(
        <IndividualPlace 
            key = {individualProduct.ID} 
            individualProduct= {individualProduct}
        />
    ))
}

export default Places;