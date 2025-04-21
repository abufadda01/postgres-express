import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.routes.js"
import errorHandler from "./middlewares/errorHandler.js"

dotenv.config()


const app = express()


app.use(express.json())
app.use(cors())


app.use("/api/v1/users" , userRoutes)



app.use(errorHandler)


const PORT = process.env.PORT || 3001

app.listen(PORT , () => {
    console.log(`Server started on port ${PORT}`)
}) 