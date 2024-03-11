import React from 'react'

export const Student = (props) => {
  return (
    <div className= "Student">
        <table>
        <tr>
            <th>Name</th>
            <td>{props.Name}</td>
            </tr>

            <tr>
            <th>age</th>
            <td>{props.age}</td>
            </tr>

            <tr>
            <th>isMarried</th>
            <td>{props.isMarried?"yes":"No"}</td>
            </tr>
        </table>
            </div>
  )
}
