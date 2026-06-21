

export const requestLogger = (req,res,next) =>{
    const currentDate = new Date().toDateString()
    console.log(`${currentDate} ${req.method} ${req.url}`)

    next();
}