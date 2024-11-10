function obtenerSubreddit(url){
      const separarString = url.split('/');
      const penultimoString = separarString[4];
      return  penultimoString
}
console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/') )// 'javascript' 
console.log(obtenerSubreddit('https://www.reddit.com/r/aww/')) // 'aww' 