let ex_01_Cat = {
  img: "cat_01.gif",
  name: "모모냥",
};
document.write(
  `<h3><img src = "./img/${ex_01_Cat.img}" alt="고양이캐릭터 이미지";></h3>`
);

console.log(ex_01_Cat);
console.log(ex_01_Cat.name);
console.log(ex_01_Cat.img);

document.write("<hr>");

let ex_02_Number1 = parseFloat("12,000");
let ex_02_Number2 = parseFloat("24,000");

let ex_02_sum = ex_02_Number1 + ex_02_Number2;
document.write(`두 수의 합산 결과: ${ex_02_sum}000원`);

//문자열을 숫자로 바꾼 후 소수점 까지 나타내는것을 모르겠습니다

document.write("<hr>");

let ex_03 = Math.ceil(Math.random() * 5);

document.write(`<img src= "./img/molang${ex_03}.jpg" style= "width:200px;">`);

document.write("<hr>");

// const catimg = [];
// const ex_04 = [
//   `<img src = "img/cat_icon1.png" style = "width:100px;">`,
//   `<img src = "img/cat_icon2.png" style = "width:100px;">`,
//   `<img src = "img/cat_icon3.png" style = "width:100px;">`,
//   `<img src = "img/cat_icon4.png" style = "width:100px;">`,
//   `<img src = "img/cat_icon5.png" style = "width:100px;">`,
//   `<img src = "img/cat_icon6.png" style = "width:100px;">`,
// ];
// const ex_04_1 = ex_04.split(",");
// document.write(ex_04);

// for (let ex_04 = 0; ex_04 <= 6; ex_04++) {
//   document.write(
//     `<img src = "img/cat_icon${ex_04}.png" style = "width:100px;" >`
//   );
// }

// let ex_04 = `<img src = "img/cat_icon1.png" style = "width:100px;">``<img src = "img/cat_icon2.png" style = "width:100px;">``<img src = "img/cat_icon3.png" style = "width:100px;">``<img src = "img/cat_icon4.png" style = "width:100px;">``<img src = "img/cat_icon5.png" style = "width:100px;">``<img src = "img/cat_icon6.png" style = "width:100px;">`;

// for (let ex_04_cat; ex_04_cat <= ex_04.length; ex_04++) {
//   document.write(ex_04);
// }

let ex_04 = [
  "img/cat_icon1.png",
  "img/cat_icon2.png",
  "img/cat_icon3.png",
  "img/cat_icon4.png",
  "img/cat_icon5.png",
  "img/cat_icon6.png",
];
for (let catimg = 0; catimg < ex_04.length; catimg++) {
  console.log(catimg);
  console.log(ex_04[catimg]);
  document.write(`<img src = "./${ex_04[catimg]}" style = "width:100px;">`);
}
