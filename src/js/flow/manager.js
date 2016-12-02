import routes from './routes';
import FlowStep from './flow-step';

export default class Manager {
    constructor() {
        this.steps = [
            new FlowStep(routes.LOGIN),
            new FlowStep(routes.TOTAL_IN_VAN),
            new FlowStep(routes.DELIVERIES),
            new FlowStep(routes.DELIVERY_DETAIL),
            new FlowStep(routes.DELIVERY_ID_REQUIRED),
            new FlowStep(routes.DELIVERY_WHAT_TO_GRAB),
            new FlowStep(routes.DELIVERY_INVOICE, [
                new FlowStep(routes.DELIVERY_RETURN_PACKAGING),
                new FlowStep(routes.DELIVERY_RETURN_GOODS),
            ]),
            new FlowStep(routes.DELIVERY_PAYMENT)
        ];

        this.currentStepIndex = 0;
        this.currentStep = this.steps[this.currentStepIndex];
        this.parentStep = null;
    }

    updateActive(flowStep, parentStep) {
        const stepToMatch = parentStep || flowStep;
        this.currentStepIndex = this.steps.findIndex(step => step.route.id === stepToMatch.route.id);

        this.currentStep = flowStep;
        this.parentStep = parentStep;
    }

    getCurrent() {
        return this.currentStep;
    }

    getNext() {
        let stepIndex = this.currentStepIndex + 1;
        let flowStep = null;


        if (this.currentStep.isSubStep) {
            flowStep = this.parentStep;
        } else {
            while (stepIndex < this.steps.length && flowStep === null) {
                let step = this.steps[stepIndex];
                if (step.isValid()) {
                    flowStep = this.steps[stepIndex];
                }

                stepIndex++;
            }
        }

        return flowStep;
    }

    getPrevious() {
        let stepIndex = this.currentStepIndex - 1;
        let flowStep = null;

        if (this.currentStep.isSubStep) {
            flowStep = this.parentStep;
        } else {
            while(stepIndex > 0 && flowStep === null) {
                let step = this.steps[stepIndex];
                if (step.canReturnTo() && step.isValid()) {
                    flowStep = this.steps[stepIndex];
                }

                stepIndex--;
            }
        }

        return flowStep;
    }
}
