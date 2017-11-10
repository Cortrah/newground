'use strict';

import Group from './Group';

export default class Survey {

    constructor({   id = 0,
                    machineName = '',
                    group = null}) {

        this.id = id;
        this.machineName = machineName;
        this.group = group;
    }

    clone() {
        let newSurvey = Object.assign({}, this);
        newSurvey.group = this.group.clone();
        return newSurvey;
    }
}

