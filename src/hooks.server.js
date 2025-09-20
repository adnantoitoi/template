export async function handle({event,resolve}){
    const user = {
        name:"Arian"
    }
    console.log("smth")
    if(user){
        event.locals.user = user
    }
    return resolve(event)
}