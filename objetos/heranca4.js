console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

console.log('Oi galera'.reverse())

Array.prototype.first = function(){
  return this[0]
}

console.log([50, 20, 10, 5, 22].first())
console.log(['a', 'b', 'c', 'd'].first())

String.prototype.toString = function() {
  return 'Deu ruim!'
}

console.log('Teste do reverse'.reverse())