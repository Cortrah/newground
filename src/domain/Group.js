'use strict';

export default class Group {

    constructor({   type = null,
                    format = null,
                    title = '',
                    titleInternal = '',
                    machineName = '',
                    narrative = '',
                    rowLabelColumnHeader = '',
                    rowLabels = [],
                    buttonLabelAdd = '',
                    buttonLabelRemove = ''}) {

        this.type = type;
        this.format = format;
        // this.rowLabels = rowLabels;
        // this.questions = questions;
        // this.children = children;
        // this.nonChildQuestions = nonChildQuestions;
        this.title = title;
        this.titleInternal = titleInternal;
        this.machineName = machineName;
        this.narrative = narrative;
        this.rowLabelColumnHeader = rowLabelColumnHeader;
        this.rowLabels = rowLabels;
        this.buttonLabelAdd = buttonLabelAdd;
        this.buttonLabelRemove = buttonLabelRemove;
    }

    clone() {
        return new Group(...this);
    }
}