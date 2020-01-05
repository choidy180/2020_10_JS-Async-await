let hello = function(name) {
    return new Promise(function(resolve, reject) {
        if(name === ''){
            reject('이름이 비어있다')
        }
        resolve(name + '님 반갑습니다!')
    })
}

hello('').then(function (result) {
    console.log(result)
}).catch(function(e) {
    console.log(e)
})