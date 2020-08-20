import { useContext } from 'react'
import { StateContext } from 'shared/utils/context'

export const useStateValue = () => useContext(StateContext)
