import StepperHookDemo from '../../components/common/Stepper';
import Header from '../../components/layout/Header';
import AppCard from '../../components/layout/Card';
import PrimaryButton from '../../components/common/Button';
import { useStepperState } from 'bold-ui';

export default function Iedconfig() {

    const { nextStep, getStepProps } = useStepperState(0)
    return (
        <main>
            <Header />
            <div style={{ padding: '2rem' }}>
                <div>
                    <StepperHookDemo getStepProps={getStepProps} />
                </div>
            </div>

            <div style={{ padding: '0.5rem' }}>
                <AppCard
                    title="IED Configuration"
                    subtitle="Configure Intelligent Electronic Devices"
                    labelButton="+ Add IED"
                >
                    <p style={{ backgroundColor: '#ECF0FF', color: '#0051A2', padding: '0.5rem', borderRadius: '4px' }}>
                    <b>Limits:</b> Maximum of 1 Publisher and 10 Subscribers | Current: 0 Publisher, 0 Subscriber(s)
                    </p>
                </AppCard>

                <AppCard
                    title="Group Configuration"
                    subtitle="Organize IEDs into groups for attack application"
                    labelButton="+ Add Group"
                />
            </div>

            <div style={{ padding: '0.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <PrimaryButton kind='primary' size='medium' children='Next >' onClick={nextStep} />
            </div>
        </main>
    )
}