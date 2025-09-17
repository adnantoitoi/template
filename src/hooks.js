export async function handle({event,resolve}){
    const user = {
        name:"smth"
    }
    if(user){
        event.locals.user = user
    }
    return resolve(event)
}