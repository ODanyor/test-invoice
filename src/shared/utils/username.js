export const getUsername = () => localStorage.getItem('username')

export const storeUsername = (username) => localStorage.setItem('username', username)

export const removeUsername = () => localStorage.removeItem('username')