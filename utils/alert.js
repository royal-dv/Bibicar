import { store } from 'react-notifications-component'

const Alerts = {
  info(message) {
    fireNotification('info', {message})
  },
  warning(message) {
    fireNotification('warning', {message})
  },
  success(message) {
    fireNotification('success', {message})
  },
  error(message) {
    fireNotification('danger', {message})
  },
  default(message) {
    fireNotification('default', {message})
  }
}

const fireNotification = (type, params) => {
  const { message, duration, ...rest } = params

  if (message) {
    store.addNotification({
      type,
      insert: 'top',
      message,
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: duration || 5000,
        showIcon: true,
        pauseOnHover: true
      },
      isMobile: false,
      className: 'b-toast',
      ...rest
    })
  }
}

export default Alerts
