import person from 'icons/person.svg'
import './styles.scss'

const Avatar = (props) => {
  const { url, name } = props

  return (url
    ? (
      <img
        src={url}
        alt={name}
        className='b-avatar'
      />
    )
    : (
      <div className='b-avatar b-avatar--empty'>
        <img
          src={person}
          alt={name}
        />
      </div>
    )
  )
}

export default Avatar
