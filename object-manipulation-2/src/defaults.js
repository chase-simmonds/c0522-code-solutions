/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}

// define function defaults with two parameters target and source
//
// loop through the keys in source
//
// if the target at key is undefined, set target key equal to source at key
//
// do not return anything
