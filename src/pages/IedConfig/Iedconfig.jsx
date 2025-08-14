import React from 'react';
import StepperHookDemo from '../../components/common/Stepper';
import Header from '../../components/layout/Header';
import AppCard from '../../components/layout/Card';

export default function Iedconfig() {

    return (

        <main>
            <Header />
            <div style={{ padding: '2rem' }}>
                <div>
                    <StepperHookDemo  />
                </div>
            </div>

            <div style={{ padding: '0.5rem' }}>
                <AppCard
                    title="IED Configuration"
                    subtitle="Configure Intelligent Electronic Devices"
                    labelButton="+ Add IED"
                >
                    <p>
                    Limits: Maximum of 1 Publisher and 10 Subscribers | Current: 0 Publisher, 0 Subscriber(s)
                    </p>
                </AppCard>

                <AppCard
                    title="Group Configuration"
                    subtitle="Organize IEDs into groups for attack application"
                    labelButton="+ Add Group"
                >
                </AppCard>
            </div>
        </main>
    )
}