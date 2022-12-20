# Math & Array

## k 진수 변환

```js
// n을 k진수로 변환
n.toString(k)
```

## 소수 판별

```js
const isPrime = (num) => {
  if(num < 2) return false;
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
    
  return true; 
}
```

## 올림, 내림, 반올림, 소수점 개수 제한

```js
// 올림
Math.ceil()

// 내림
Math.floor()

// 반올림
Math.round()

// 소수점 개수 제한
num.toFixed(3)
```

## 배열 합 (reduce)

```js
arr.reduce((prev, acc) => prev + acc, 0)
```

## 1차원 배열 초기화

```js
// n 크기의 배열
const arrary = Array.from({length: n}, () => 1)
```

## 2차원 배열 만들기

```js
// n * n 배열
const board = Array.from(Array(n), () => Array(n).fill(999999999));
```
