const numbers = [10, 4, 100, -5, 54, 2];
let answer = null;

const tryLoopFor = ()=> {
    let answer = null;
    for (let i = 0; i < numbers.length; i++) {
       answer += numbers[i] ** 3
    }
    return console.log(answer)
}

const tryLoopForOf = ()=> {
    let answer = null;
    for (let item of numbers) {
        answer += item ** 3
    }
    return console.log(answer)
}

const tryForEach = ()=> {
    let answer = null;
    numbers.forEach((item)=>{
        answer+=item**3
    })
    return console.log(answer)
}

const tryReduce = ()=> {
    answer = numbers.reduce((acc,item)=> acc+item**3, 0)
    return console.log(answer)
}

tryLoopFor()
tryLoopForOf()
tryForEach()
tryReduce()


