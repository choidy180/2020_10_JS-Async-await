# Async/await

더 편안한 환경에서 Promise를 다루기 위해 태어난 특별한 문법이 있다. 그 문법은 "async/await"이라 불린다

+ Async 함수

    async function f(){
        return 1;
    }

여기서 async라는 단어가 의미하는 것은 간단하다 promise를 반환하는 함수라는 뜻이고 심지어 만일 함수가 실제로 promise가
아닌 값을 반환해도, async 키워드로 정의된 함수는 자바 스크립트에서 자동으로 그 값을 resolve promise로 감싸라고 지시한다
위에 작성한 코드는 1이라는 결과값의 resolved promise를 반환한다.

    async function f(){

        return 1;
    
    }
    f().then(alert); // 1


명시적으로 promise를 반환할 수도 있는데  

    async function f() {
        return Promise.resolve(1)    
    }
    f().then(alert):

async는 함수가 promise를 리턴하는 것을 보장해준다. 그리고 promise가 아닌것을 리턴하더라도 promise로 감싸서
resolve promise가 반환하는 것을 확인할 수 있다.

