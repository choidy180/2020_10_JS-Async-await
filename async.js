let hello = function(name) {
    return new Promise(function(resolve, reject) {
        if(name === ''){
            reject('이름이 비어있다')
        }
        resolve(name + "! 반가워!")
    })
}
let syncHello = async function(name) {
    let result = await hello(name)
    console.log(result)
}

syncHello("김민석");