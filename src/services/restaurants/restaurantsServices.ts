

export const getRestaurant = (id:number)=>{
    return new Promise((resolve,reject)=>{
        const restaurant = id 
        if(!restaurant)reject("not found")
        else resolve(restaurant)
        
    })

}