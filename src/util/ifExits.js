/**
 * DemeterBane, for those who just have to dig deeply into objects and guess at the objects structure
 * Returns the descendant object of the given object found by applying the path in the array or string given.
 * Returns null without producing a warning or error if any sub-object along the path is null.
 */

ifExists =  function(object, pathArray) {
    if(typeof pathArray == "string") {
        pathArray = pathArray.split(".");
    }
    if(pathArray.constructor !== Array) {
        pathArray = [pathArray];
    }

    for( let index = 0; index < pathArray.length; index++) {
        if(object == null) {
            return null;
        }
        let pathPart = pathArray[index];
        object = object[pathPart];
    }
    return object;
};
