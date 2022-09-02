import {mocks} from './mock'
import {restaurants} from './dummy'
import camelize  from 'camelize-ts'
const dataTransformer = (data)=>{
    return 
}
export const getRestaurant = ()=>{
    return new Promise((resolve,reject)=>{
        //console.log(location)
        //const data =  mocks[location] 
        // data = data.map(item=>{
        //     return {
        //         ...item,
        //         openNow:item.opening_hours.open_now
        //     }
        // })
        const restaurantData =  camelize(restaurants)
        if(!restaurantData) reject("not found")
        else  resolve(restaurantData)
        
    })

}
getRestaurant()