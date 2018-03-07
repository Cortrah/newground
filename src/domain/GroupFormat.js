'use strict';

export default class GroupFormat {

    constructor({   id = 0,
                    machineName = '',
                    name = '',
                    allowMultipleRows = false}) {

        this.id = id;
        this.machineName = machineName;
        this.name = name;
        this.allowMultipleRows = allowMultipleRows;
    }
}
