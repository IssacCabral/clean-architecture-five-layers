import env from 'dotenv'

env.config()

export default {
  TYPEORM_HOST: process.env.TYPEORM_HOST,
  TYPEORM_PORT: process.env.TYPEORM_PORT,
  TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
  TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
  TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
}