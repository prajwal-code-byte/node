import dotenv from 'dotenv'

dotenv.config()

const config = {
    appName : process.env.APPNAME,
    port : process.env.PORT,
    envrironment : process.env.ENVIRONMENT
}

export default config