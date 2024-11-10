function aHackerSpeak(str){
      return str
      .replace(/[iI]/g,'1')
      .replace(/[eE]/g,'3')
      .replace(/[aA]/g,'4')
      .replace(/[sS]/g,'5')
      .replace(/0/g,'0');


}

console.log(aHackerSpeak('javascript')) // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker'))// '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')) // '4D4 L0V3L4C3'