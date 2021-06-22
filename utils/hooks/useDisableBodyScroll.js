import { useEffect } from 'react'

const useDisableBodyScroll = (condition) => {
  useEffect(() => {
    document
      .querySelector('body')
      .style
      .overflow = condition ? 'hidden' : 'visible'
  }, [condition])
}

export default useDisableBodyScroll
