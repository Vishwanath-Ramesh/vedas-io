import React from 'react'

import './FormTabs.css'

const FormTabList = ({ activeIndex, onActiveTab, children }) => {
  return (
    <div className="formtab__tablist">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isActive: index === activeIndex,
          onActivate: () => onActiveTab(index),
        })
      })}
    </div>
  )
}

const FormTab = ({ isDisabled, isActive, onActivate, children }) => {
  return (
    <div
      className={`formtab__tab${isActive ? ' active' : ''}`}
      onClick={onActivate}
    >
      {children}
    </div>
  )
}

const FormTabPanel = ({ children }) => {
  return <div className="formtab__tabpanel active">{children} </div>
}

const FormTabPanels = ({ activeIndex, children }) => {
  return <div className="formtab__tabpanels">{children[activeIndex]}</div>
}

const FormTabs = ({ selectedIndex, children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className="formtab">
      {React.Children.map(children, (child, idx) => {
        if (child.type === FormTabPanels)
          return React.cloneElement(child, { activeIndex })
        if (child.type === FormTabList)
          return React.cloneElement(child, {
            activeIndex,
            onActiveTab: (index) => setActiveIndex(index),
          })
        return child
      })}
    </div>
  )
}

FormTabs.FormTabList = FormTabList
FormTabs.FormTab = FormTab
FormTabs.FormTabPanel = FormTabPanel
FormTabs.FormTabPanels = FormTabPanels

export default FormTabs
