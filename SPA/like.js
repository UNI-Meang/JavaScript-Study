// 배열 선언
let numberList = [181, 161, 25, 44];

// 배열의 모든 값에 2를 곱한다.
numberList = numberList.map(function (value, index, array) {
    return value * 2;
})

// 출력한다.
// 매개변수로 console.log 메서드 자체를 넘겨줬다.
numberList.forEach(console.log);