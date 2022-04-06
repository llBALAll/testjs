function finacci1 (lenFibo) {
    let sum2b=0
    let v_n = []
    for (let i=0;i<lenFibo;i++){
        if (i<2) {
            v_n.push(i)
        } else {
            sum2b = v_n[i-2] + v_n[i-1]
            v_n.push(sum2b)        
        }
    }
    // console.log(v_n)
    // console.log(v_n[lenFibo-1])
    // console.log(sum2b)
    return sum2b
}

function finacci2 (lenFibo) {
    let a=0
    let b=0
    let sum2b=0
    for (let i=0;i<lenFibo;i++){
        a=b
        b=sum2b
        if (i<2) {
            sum2b=i
        } else {
            sum2b=a+b
        }
        // console.log(sum2b)
    }
    // console.log(sum2b)
    return sum2b
}

function funcTimer () {
    const millis = (Date.now() - start) / 1000;
    console.log('time elapsed =', millis);
}

let start = Date.now();

// pra rodar varias vezes a funcao pra poder mensurar o tempo de execucao da funcao em comparacao com outras implementacoes
let n_iter=100000
let n_numbers
let result=0
for (let i=0; i<n_iter;i++){
    result=finacci1(n_numbers)
    if (i == 99999) funcTimer()
}
console.log(result)

start = Date.now();

// pra rodar varias vezes a funcao pra poder mensurar o tempo de execucao da funcao em comparacao com outras implementacoes
result=0
for (let i=0; i<n_iter;i++){
    result=finacci2(n_numbers)
    if (i == 99999) funcTimer()
}
console.log(result)
