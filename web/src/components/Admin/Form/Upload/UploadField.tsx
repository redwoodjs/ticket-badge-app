import { useState, MouseEvent, useEffect } from 'react'

import { toast } from '@redwoodjs/web/toast'

import Icon from 'src/components/Icon/Icon'

interface Props {
  defaultValue?: string
  name: string
  onChange?: (fileName: string) => void
}

interface CloudinaryData {
  name?: string
  access_mode?: 'public' | 'private'
  asset_id?: string
  bytes?: number
  created_at?: string
  etag?: string
  folder?: string
  format?: string
  height?: number
  original_filename?: string
  placeholder?: boolean
  public_id?: string
  resource_type?: string
  secure_url?: string
  signature?: string
  tags?: []
  type?: string
  url?: string
  version?: number
  version_id?: string
  width?: number
}

const UploadField = ({ defaultValue, name, onChange }: Props) => {
  const [dragging, setDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cloudinaryFile, setCloudinaryFile] = useState<CloudinaryData>({
    url: defaultValue,
  })

  useEffect(() => {
    onChange(cloudinaryFile?.url ? cloudinaryFile.url : '')
  }, [cloudinaryFile, onChange])

  const preventDefaults = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const clearImage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCloudinaryFile(null)
  }

  const handleMouseOver = (e: MouseEvent) => {
    preventDefaults(e)
    setDragging(true)
  }

  const handleMouseOut = (e: MouseEvent) => {
    preventDefaults(e)
    setDragging(false)
  }

  // TODO: handle select file from computer
  const handleSelectFile = () => {
    console.log('handle selected file')
  }

  const handleDrop = (e) => {
    preventDefaults(e)
    setDragging(false)

    const dt = e.dataTransfer
    const files = dt.files

    uploadFile(files[0])
  }

  const uploadFile = (file) => {
    setIsLoading(true)

    // validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('File must be an image')
      return
    }

    // send file to Cloudinary
    const url = `https://api.cloudinary.com/v1_1/${process.env.REDWOOD_ENV_CLOUDINARY_CLOUD}/image/upload`
    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'upload_preset',
      process.env.REDWOOD_ENV_CLOUDINARY_UPLOAD_LOGOS
    )

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log({ data })
        setCloudinaryFile({ ...data, name: file.name })
        setIsLoading(false)
      })
  }

  return (
    <div
      className={`h-[60px] border-1 border-dashed border-white text-white hover:border-cyan-500 hover:text-cyan-500 ${
        dragging && 'border-cyan-500 text-cyan-500'
      }`}
      onDragEnter={handleMouseOver}
      onDragLeave={handleMouseOut}
      onDragExit={handleMouseOut}
      onDragOver={handleMouseOver}
      onDrop={handleDrop}
    >
      <label
        htmlFor={`upload_${name}`}
        className="center relative h-full w-full cursor-pointer font-sans font-bold"
      >
        {cloudinaryFile?.url ? (
          isLoading ? (
            <span>Uploading...</span>
          ) : (
            <>
              <div className="center gap-x-3">
                <img src={cloudinaryFile.url} alt="logo" className="h-[50px]" />
                {cloudinaryFile.name}
              </div>
              <button
                className="absolute -right-3 -top-3 rounded-full bg-white text-black"
                onClick={clearImage}
              >
                <Icon id="close" />
              </button>
            </>
          )
        ) : isLoading ? (
          <span>Uploading...</span>
        ) : (
          <div className="flex items-center gap-x-3">
            <Icon id="upload" />
            Drag and Drop to Upload
          </div>
        )}
      </label>
    </div>
  )
}

export default UploadField
