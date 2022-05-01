function findMatching(arrayOfDriverNames, string) {
    const x = arrayOfDriverNames.filter(function(user) {
        return (user.toLowerCase() === string.toLowerCase());
    })
    return x;
}

function fuzzyMatch(arrayOfDriverNames, string) {
    const x = arrayOfDriverNames.filter(function(user) {
        return (user.charAt(0) === string.charAt(0))
    })
    return x;
}

function matchName(arrayOfDriverObject, string) {
    const x = arrayOfDriverObject.filter(function(user) {
        return (user.name === string)
    })
    return x;
}