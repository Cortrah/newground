'use strict';

import Group from './Group';

export default class Survey {

    constructor({   id = 0,
                    title = '',
                    titleInternal = '',
                    machineName = '',
                    narrative = '',
                    groupVersionMachineName = '',
                    group = new Group()}) {

        this.id = id;
        this.title = title;
        this.titleInternal = titleInternal;
        this.machineName = machineName;
        this.narrative = narrative;
        this.groupVersionMachineName = groupVersionMachineName;
        this.group = group;
    }

    clone() {
        let newSurvey = new Survey(...this);
        newSurvey.group = this.group.clone();
        return newSurvey;
    }
}