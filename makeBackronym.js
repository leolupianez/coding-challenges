// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:
// "dgm" ==> "disturbing gregarious mustache"
// "lkj" ==> "literal klingon joke"

// Solution:
var makeBackronym = function(string){
    return string
      .toUpperCase()
      .split("")
      .map(l => dict[l])
      .join(" ")
};