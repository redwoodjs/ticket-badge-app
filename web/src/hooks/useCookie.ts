// Reference: https://medium.com/swlh/react-hooks-usecookie-hook-26ac06ff36b0

import { useState } from 'react'

const getItem = (key: string) =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=')
    const storedKey = item[0]
    const storedValue = item[1]

    return key === storedKey ? decodeURIComponent(storedValue) : total
  }, '')

const setItem = (key: string, value: string, numberOfDays: number) => {
  const now = new Date()

  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000)

  document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`
}

type useCookieTuple = [string, (param: string, days: number) => void]

const useCookie = (key: string, defaultValue: string): useCookieTuple => {
  const getCookie = () => getItem(key) || defaultValue
  const [cookie, setCookie] = useState(getCookie())

  const updateCookie = (value: string, numberOfDays: number) => {
    setCookie(value)
    setItem(key, value, numberOfDays)
  }

  return [cookie, updateCookie]
}

export default useCookie
