import {Step, Stepper, VFlow} from 'bold-ui'

function StepperHookDemo({ getStepProps }) {
  return (
    <VFlow>
      <Stepper>
        <Step {...getStepProps(0)}>IED Config</Step>
        <Step {...getStepProps(1)}>GOOSE Flow Message Config</Step>
        <Step {...getStepProps(2)}>Attack Config</Step>
        <Step {...getStepProps(3)}>Download Dataset</Step>
      </Stepper>
    </VFlow>
  )
}

export default StepperHookDemo