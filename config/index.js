// Credentials for jwt Secret and Database -- from the .env file
module.exports = {
    MONGO_URI: process.env.MONGODB_URI || process.env.DATABASE_INFO,
    jwtSecret: process.env.JWT_SECRET
}