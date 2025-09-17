export const actions = {
    login:async ({request})=>{
        const Data = await request.formData()
        console.log(Data)
    }
}