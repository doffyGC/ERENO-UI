import { Button } from 'bold-ui'

function PrimaryButton({kind, size, children, onClick}) {
  return (
    <Button kind={kind} size={size} skin='default' onClick={onClick}>
          {children}
    </Button>
  )
}

export default PrimaryButton