const a = 5;
const b = 2;
let myName = "nuri";

//const = constant(상수) : 상수 값은 바뀔 수 없음.
//let : 값이 바뀔 수 있음.
//var : 원하는 곳에서 항상 변경할 수 있음. 규칙이 없음 -> 언어를 통한 보안이 보장되지 않음 -> const, let을 만든 이유
//const : 항상, let : 가끔, var : 절대 안됨.
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "nurilee";     //let으로 생성한 것이고, myName을 nurilee로 업데이트 한 것.
                        //myName이 const면 업데이트할 수 없음.

console.log("yout new name is "+myName);

//boolean   : true(1), false(0)
//null : 변수 안에 "값이 없음"이 값으로 들어간 상태, 아무것도 없다는 것을 확신하고 싶을 때 사용
//undefined : 변수 안에 값이 없음
const amIFat = null;
let something;
console.log(something, amIFat);

//데이터 정리 _ array

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

//Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato","tomato","pizza"];
console.log(toBuy[2]);

//Objects
//array에 넣으면 각 값이 무엇을 의미하는 지 모른다.
//값의 공통점이 있다면(ex. 요일) array에 넣는 것이 효율적이다.
const player1 = {
    name: "nuri",
    points: 10,
    fat: true,
};

//아래 두 줄은 같은 의미임.
console.log(player1.name);
console.log(player1["name"]);

console.log(player1);

//object에 접근하는 방법 : .
player1.fat = false;     //여기서 cost는 player이기 때문에, 이 안에 property를 업데이트하는 데엔 문제 없다.
player1.lastName = "potato"; //원하는 property를 만들 수 있음.
player1.points = player1.points + 15;
console.log(player1);

//funtion : 반복해서 사용할 수 있는 코드 조각
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
}

sayHello("nuri", 25);
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber){
    console.log(firstNumber+secondNumber);
}

function divide(x, y){
    console.log(x/y);
}

plus(8, 60);
divide(98, 20);

const player2 = {
    name: "nuri",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player2.name);
player2.sayHello("lynn");
player2.sayHello("nico");

const num = 5;
let isNicoFat = true;

isNicoFat = false;

//계산기 직접 만들어보기
const calculator = {
    add: function(num1,num2){
        console.log(num1+num2);
    },
    minus: function(num1,num2){
        console.log(num1-num2);
    },
    double: function(num1,num2){
        console.log(num1*num2);
    },
    divide: function(num1,num2){
        console.log(num1/num2);
    },
    powerOf: function(num1,num2){
        console.log(num1**num2);
    },
};

calculator.add(1,2);
calculator.minus(5,3);
calculator.double(2,4);
calculator.divide(10,2);
calculator.powerOf(2,3);

//한국나이로 변환하기 -> function이 function 외부와 상호작용 : return
const age = 96;

function calculateKrAge(ageOfForeinger){
    return ageOfForeinger + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

//위 계산기에서 console.log -> return으로 변경 후
//마지막 줄에 const plusResult = calculator.plus(2,3);
//           console.log(plusResult);