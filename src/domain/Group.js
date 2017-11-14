'use strict';

export default class Group {

    constructor({   id = 0,
                    title = '',
                    machineName = '',
                    narrative = '',
                    type = null,
                    rowLabels = []}) {

        this.id = id;
        this.title = title;
        this.machineName = machineName;
        this.narrative = narrative;
        this.type = type;
        this.rowLabels = rowLabels;
    }

    clone() {
        return Object.assign({}, this);
    }
}
