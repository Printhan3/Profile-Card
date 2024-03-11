import React from 'react'

export const ChildComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}
ChildComponent.prototypes= {
 children:prototypes.array
};