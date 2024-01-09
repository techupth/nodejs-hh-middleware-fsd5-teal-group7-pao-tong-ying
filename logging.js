import fs from "fs/promises"

const logging =async(req,res,next)=>{
    
    try {
        const logText = `\nIP: ${req.ip},Method ${req.method}, Endpoint ${req.originalUrl}`
        await fs.writeFile("logs.txt",logText)
    }catch{
        await fs.writeFile("logs.txt",`Logging Error on ${logText}`)
    }
    next()
}

export default logging