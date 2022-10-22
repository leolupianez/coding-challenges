// Message from Aliens
// Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!

// ]()]|_]|_]][-]|-|] = hello
// {|^{|{{|_{]3{ = blip
// ..[-.|_.|^....().[-.|^.__..|)...|.|^.|_|..~|~._\\~.__...[-..|.|)..' = die stupid people
// '''_\\~'|_|'()'|''('|'|_'[-'|)''__'_\\~'/<'()'()'|_'''__'|\\|'|''/\\'/?']3'__''/?'|_|''()'`/'' = your brain looks delicious
// }/\\}~|~}/\\}/<}__}|)}}}[-}~|~}/\\}(}|}|_}|^}|_|}|)}__}|)}}}|\\|}|}/=}__}()}}}~|~}__}`/}/?}}~|~} = try to find duplicated kata    

// Solution:
function decode(m) {
    const letters = {
      '/\\': 'a',
      ']3': 'b',
      '(': 'c',
      '|)': 'd',
      '[-': 'e',
      '/=': 'f',
      '(_,': 'g',
      '|-|': 'h',
      '|': 'i',
      '_T': 'j',
      '/<': 'k',
      '|_': 'l',
      '|\\/|': 'm',
      '|\\|': 'n',
      '()': 'o',
      '|^': 'p',
      '()_': 'q',
      '\/?': 'r',
      '_\\~': 's',
      '~|~': 't',
      '|_|': 'u',
      '\\/': 'v',
      '\\/\\/': 'w',
      '`/': 'y',
      '><': 'x',
      '~\/_': 'z',
      '__': ' '
    }
    
    return m.split(m[m.length-1])
      .filter(Boolean)
      .map(a => letters[a])
      .reverse()
      .join('');
}