
const handleResposne = (res , status , message , data = null    ) => {
    res.status(status).json({
        status ,
        message ,
        data
    })
}
 

export default handleResposne