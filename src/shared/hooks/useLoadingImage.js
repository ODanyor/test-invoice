import { useState } from 'react'
import profile from 'shared/assets/profile.jpg'

export const useLoadingImage = (loadingImage) => {
  const [image, setImage] = useState(profile)

  const imgRef = new Image()
  imgRef.src = loadingImage
  imgRef.onload = () => setImage(imgRef.src)

  return image
}
