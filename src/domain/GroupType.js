'use strict';

export default class GroupType {

    constructor({   id = 0,
                    machineName = '',
                    name = ''}) {

        this.id = id;
        this.machineName = machineName;
        this.name = name;
    }
}
