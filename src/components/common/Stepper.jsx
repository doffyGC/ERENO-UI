import { Button, HFlow, Step, Stepper, useStepperState, VFlow } from 'bold-ui'
import React from 'react'

function StepperHookDemo() {
  const { getStepProps, nextStep, previousStep } = useStepperState(1)

  return (
    <VFlow>
      <Stepper>
        <Step {...getStepProps(0)}>IED Config</Step>
        <Step {...getStepProps(1)}>GOOSE Flow Message Config</Step>
        <Step {...getStepProps(2)}>Attack Config</Step>
        <Step {...getStepProps(3)}>Download Dataset</Step>
      </Stepper>

      <HFlow justifyContent='center'>
        <Button size='small' skin='default' onClick={previousStep}>
          Previous
        </Button>
        <Button size='small' kind='primary' skin='default' onClick={nextStep}>
          Next
        </Button>
      </HFlow>
    </VFlow>
  )
}

export default StepperHookDemo