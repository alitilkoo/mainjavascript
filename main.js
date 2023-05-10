const countCharacters = (sentence)=>{
    
    let splitNotSpace= sentence.replaceAll(' ','').split('');
    
    return splitNotSpace.reduce((charNum,key)=>{

        if (charNum[key]) {
            charNum[key] += 1;
        } else {
            charNum[key]=1;
        }
        return charNum

    },{})
};
console.log(countCharacters("Hello World"));
