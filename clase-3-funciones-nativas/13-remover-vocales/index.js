function removerVocales(str){
     return str.replace(/[aeiouAEIOU]/g,"");
}
console.log(removerVocales('javascript')) // 'jvscrpt'
console.log(removerVocales('ada lovelace')) // 'd lvlc'