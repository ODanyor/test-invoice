import { useState } from 'react'

export const useHandleValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleValue = (event) => setValue(event.target.value)

  return { controls: { value, onChange: handleValue }, setValue }
}
