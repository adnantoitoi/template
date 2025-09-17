export async function handle({event,resolve}){
    const user = {
        name:"Adnan"
    }
    console.log("smth")
    if(user){
        event.locals.user = user
    }
    return resolve(event)
}