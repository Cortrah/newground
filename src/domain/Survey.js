'use strict';

import Group from './Group';

export default class Survey {

    constructor({   id = 0,
                    title = '',
                    titleInternal = '',
                    machineName = '',
                    narrative = '',
                    groupVersionMachineName = '',
                    group = null}) {

        this.id = id;
        this.title = title;
        this.titleInternal = titleInternal;
        this.machineName = machineName;
        this.narrative = narrative;
        this.groupVersionMachineName = groupVersionMachineName;
        this.group = new Group(group);
    }

    clone() {
        let newSurvey = Object.assign({}, this);
        newSurvey.group = this.group.clone();
        return newSurvey;
    }
}

