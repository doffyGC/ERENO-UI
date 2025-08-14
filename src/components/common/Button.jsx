import { Button } from 'bold-ui'
import React from 'react'

function PrimaryButton({kind, size, children}) {
  return (
    <Button kind={kind} size={size} skin='default'>
          {children}
    </Button>
  )
}

export default PrimaryButton