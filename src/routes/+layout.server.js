export async function load({locals}){
    console.log("Ran")
    if(locals.user){
        return {user:locals.user}
    }
}