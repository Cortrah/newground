'use strict';

export default class Group {

    constructor({   id = 0,
                    title = '',
                    titleInternal = '',
                    machineName = '',
                    narrative = '',
                    rowLabelColumnHeader = '',
                    type = null,
                    format = null,
                    rowLabels = [],
                    questions = [],
                    children = [],
                    nonChildQuestions = [],
                    buttonLabelAdd = '',
                    buttonLabelRemove = ''}) {

        this.id = id;
        this.title = title;
        this.titleInternal = titleInternal;
        this.machineName = machineName;
        this.narrative = narrative;
        this.rowLabelColumnHeader = rowLabelColumnHeader;
        this.type = type;
        this.format = format;
        this.rowLabels = rowLabels;
        this.questions = questions;
        this.children = children;
        this.nonChildQuestions = nonChildQuestions;
        this.buttonLabelAdd = buttonLabelAdd;
        this.buttonLabelRemove = buttonLabelRemove;
    }

    clone() {
        return Object.assign({}, this);
    }
}
