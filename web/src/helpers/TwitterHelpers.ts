interface Props {
  description?: string
  hashtags?: string
  url: string
}

export const TwitterShareUrl = ({
  description,
  hashtags = '',
  url = '',
}: Props) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = encodeURIComponent(hashtags)

  const href = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDescription}&hashtags=${encodedHashtags}`

  return href
}
