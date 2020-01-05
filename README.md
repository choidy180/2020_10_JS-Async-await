# JS-Async&await

async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법
기존의 비동기 처리 방식인 콜백 함수의 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와줌

+ await 뒷부분에 반드시 promise를 반환해야하고 async function 자체도 promise를 반환함

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
