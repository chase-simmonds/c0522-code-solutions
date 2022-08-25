/* exported titleCase */

/* edge cases: JavaScript, API (hard code)

hyphenated words

minor words as long as not first word: and, or, nor, but, a, an, the, as, at,
by, for, in, of, on, per, to

define function with one parameter title */

function titleCase(title) {
  var titleArray = title.toLowerCase().split(' ');
  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray[i] === 'javascript') {
      titleArray[i] = 'JavaScript';
    } else if (titleArray[i] === 'javascript:') {
      titleArray[i] = 'JavaScript:';
    } else if (titleArray[i] === 'api') {
      titleArray[i] = 'API';
    } else if (titleArray[i].includes('-')) {
      var split = titleArray[i].split('-');
      split[1] = split[1].toUpperCase().charAt(0) + split[1].substring(1);
      titleArray[i] = split.join('-');
    }
    titleArray[i] = titleArray[i].toUpperCase().charAt(0) + titleArray[i].substring(1);
    if (i !== 0 && titleArray[i - 1][(titleArray[i - 1].length - 1)] !== ':' && (titleArray[i] === 'And' || titleArray[i] === 'Or' || titleArray[i] === 'Nor' || titleArray[i] === 'But' || titleArray[i] === 'A' || titleArray[i] === 'An' || titleArray[i] === 'The' || titleArray[i] === 'As' || titleArray[i] === 'At' || titleArray[i] === 'By' || titleArray[i] === 'For' || titleArray[i] === 'In' || titleArray[i] === 'Of' || titleArray[i] === 'On' || titleArray[i] === 'Per' || titleArray[i] === 'To')) {
      titleArray[i] = titleArray[i].toLowerCase();
    }
  }
  return titleArray.join(' ');
}
