import clsx from 'clsx'
import ClipLoader from 'react-spinners/GridLoader'
import './styles.scss'

export const Spinner = () => {
  return (
    <ClipLoader
      size={12}
      color='#2295f2'
      css={{
        width: 48,
        display: 'block'
      }}
    />
  )
}

const Loading = (props) => {
  const { loading, children } = props

  return (
    <div className='b-spinner'>
      {loading &&
        <div className='b-spinner__indicator'>
          <Spinner />
        </div>
      }
      <div className={clsx(loading && 'b-spinner__container')}>
        {children}
      </div>
    </div>
  )
}

export default Loading
