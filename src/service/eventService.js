export const getEvents = async() => {
    try{
        const request = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        const data = await request.json()
        return data.events
    }catch(err){
        return []
    }
}

