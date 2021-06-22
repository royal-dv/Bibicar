import clsx from 'clsx'
import { useMemo } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import './styles.scss'

const TabBar = (props) => {
  const { items, children, lazyLoad, defaultActive } = props

  const content = useMemo(() => {
    const arrayOfContent = Array.isArray(children) ? children : [children]
    return arrayOfContent.filter(item => !!item)
  }, [children])

  const defaultIndex = useMemo(() => {
    if (defaultActive) {
      const index = items.findIndex(item => item.key === defaultActive)
      return index > -1 ? index : 0
    }
    return 0
  }, [items, defaultActive])

  return (
    <Tabs
      className='b-tabbar'
      defaultIndex={defaultIndex}
      forceRenderTabPanel={!lazyLoad}
    >
      <TabList className='b-tabbar__header'>
        {items.map(item => (
          <Tab
            key={item.key}
            disabled={item.disabled}
            className={clsx(
              'b-tabbar__tab',
              item.error && 'b-tabbar__tab--error',
            )}
            selectedClassName='b-tabbar__tab--active'
            disabledClassName='b-tabbar__tab--disabled'
          >
            {item.title}
          </Tab>
        ))}
      </TabList>

      <div className='b-tabbar__content'>
        {content.map(item => (
          <TabPanel key={item.props.tabkey}>
            {item}
          </TabPanel>
        ))}
      </div>
    </Tabs>
  )
}

export default TabBar
