import { Cloudinary } from '@cloudinary/url-gen'

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REDWOOD_ENV_CLOUDINARY_CLOUD,
  },
})
