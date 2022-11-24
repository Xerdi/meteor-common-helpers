import {Template} from "meteor/templating";

Template.registerHelper('eq', function(obj1, obj2, then = true) {
    if (obj1 === obj2) {
        return then;
    }
});

Template.registerHelper('ne', function(obj1, obj2, then = true) {
    if (obj1 !== obj2) {
        return then;
    }
});

Template.registerHelper('not', function(value, then = true) {
    if (value === false || value === undefined || value === null) {
        return then;
    }
});

Template.registerHelper('gt', function(obj1, obj2, then = true) {
    if (obj1 > obj2) {
        return then;
    }
});

Template.registerHelper('gte', function(obj1, obj2, then = true) {
    if (obj1 >= obj2) {
        return then;
    }
});

Template.registerHelper('lt', function(obj1, obj2, then = true) {
    if (obj1 < obj2) {
        return then;
    }
});

Template.registerHelper('lte', function(obj1, obj2, then = true) {
    if (obj1 <= obj2) {
        return then;
    }
});

Template.registerHelper('or', function() {
    for (const arg of arguments) {
        if (arg) return arg;
    }
});

Template.registerHelper('and', function () {
    let prev = true;
    for (const arg of arguments) {
        prev = prev && arg;
        if (!prev)
            break;
    }
    return prev;
});
