import { Cell, Grid, TextField } from 'bold-ui'
import React from 'react'

function TextFieldDemo({label, name, defaultValue}) {
  return (
      <Cell xs={12} md={3}>
        <TextField label={label} name={name} defaultValue={defaultValue} required />
      </Cell>
  )
}

export default TextFieldDemo