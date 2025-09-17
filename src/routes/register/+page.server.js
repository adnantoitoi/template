export const actions = {
    register:async ({request})=>{
        const Data = await request.formData()
        console.log(Data)
    }
}