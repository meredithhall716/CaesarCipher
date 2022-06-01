exports.caesarCipher = function(str, num) {
    let result = []
  
    if (num === 0) {
      return str
    }

    for (let i of str) {
        if (!i.match(/[a-zA-Z]/g)){
            asciiVal = i
    } 
        if (i.match(/[a-zA-Z]/g)) {
            let code = i.charCodeAt(i)


            if (code >= 65 && code <= 90) {
                asciiVal = String.fromCharCode((code + num))
        } else if (code >= 97 && code <= 122) {
                asciiVal = String.fromCharCode((code + num))
        } 
        
        if (num > 0){
            if (asciiVal > 'Z' && asciiVal < 'a' || asciiVal > 'z'){
                asciiVal = String.fromCharCode(asciiVal.charCodeAt(0) - 26)
            }
        
        } 
        if (num < 0){
            if (asciiVal < 'a' && asciiVal > 'Z' || asciiVal < 'A'){
                asciiVal = String.fromCharCode(asciiVal.charCodeAt(0) + 26)
            }
        }
        
        }
    result.push(asciiVal)
    }
return result.join("")
}
