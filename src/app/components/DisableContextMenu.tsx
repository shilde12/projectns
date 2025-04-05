'use client'

import { useEffect } from 'react'

export default function DisableContextMenu() {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault()
    document.addEventListener('contextmenu', disableContextMenu)
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu)
    }
  }, [])

  return null
}