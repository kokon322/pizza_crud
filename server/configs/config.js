module.exports = {
    PORT: process.env.PORT || 12000,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_REFRESH: process.env.JWT_REFRESH || 'refresh',
    MONGO_URL: process.env.MONGO_URL || 'mongo',
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'kokos@gmail.com',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '324578145148asdw2'
};