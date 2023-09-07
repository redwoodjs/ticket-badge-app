export const og = async (id: number) => {
  if (id === undefined) {
    return
  }

  const uploadFile = async () => {
    const file = `${process.env.REDWOOD_ENV_API_FLASH}&width=1200&height=630&delay=3&url=${process.env.REDWOOD_ENV_SCREENSHOT_URL}/og/${id}`

    const url = `https://api.cloudinary.com/v1_1/${process.env.REDWOOD_ENV_CLOUDINARY_CLOUD}/image/upload`
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'badges')

    const cloudinaryUrl = fetch(url, {
      method: 'POST',
      body: formData,
    }).then(async (response) => {
      const result = await response.json()
      return result.url
    })

    return cloudinaryUrl
  }

  try {
    const cloudinaryUrl = await uploadFile()
    return cloudinaryUrl
  } catch (error) {
    console.log({ error })
  }
}
