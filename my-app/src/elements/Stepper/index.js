import React from 'react'
import propTypes from 'react-types'

export default function Stepper(props) {
    
    const { steps, initialStep } = props
    const stepsKeys = Object.keys(steps)

    const [currentStep, initialStep]= useState(
    stepKeys.indexOf(initialStep > -1 ? initailStep : stepKeys[0])
    )

    const totalStep = stepsKeys
    const indexStep = stepKeys.indexOf(currentStep)

    function prevStep() {
        if(+indexStep > 0) setCurrentStep(stepsKeys[indexStep-1])
    }
    function nextStep() {
        if(+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep+1])
    }
    return (
        <>
          {props.chidren(prevStep,nextStep,currentStep,steps)}  
        </>
    )

    
}
Stepper.propTypes = {
        data: propTypes.object.isRequired,
        initialStep:propTypes.string
    }