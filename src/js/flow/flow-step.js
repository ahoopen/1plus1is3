import {formatPattern} from 'react-router'

export default class FlowStep {
    constructor(route, substeps = []) {
        this.isSubStep = false;
        this.route = route;
        this.subSteps = substeps;

        this.subSteps.forEach(step => step.isSubStep = true);
    }

    getUrl(params) {
        return formatPattern(this.route.path, params);
    }

    getSubSteps() {
        return this.subSteps;
    }

    canReturnTo() {
        return this.route.canReturnTo;
    }

    isValid() {
        let valid = this.route.finished;

        if (valid && this.route.condition) {
            valid = this.route.condition();
        }

        return valid;
    }

    hasSubSteps() {
        return this.subSteps.length > 0;
    }
}
