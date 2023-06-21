const pointer = document.getElementById('pointer')
console.log(pointer)

window.addEventListener('mousemove',(Event)=> {
 console.log(Event.clientX , Event.clientYc) 
console.log('마우스 X값 : ${event.clientX}, 마우스 Y값: ${event.clientY}')
pointer.style.top = `${Event.clientY - (pointer.offsetHeight / 2)}px`
pointer.style.left = `${Event.clientX - (pointer.offsetHeight / 2)}px`
})
pointer. style
//F12에서 마우스좌표값을 자바스크립트파일에 쓴것처럼 함수와함께 볼 수 있다.//
//커셔움직일때 주는 공식을  쓸때는 주로 백테(~/`)를 주로 쓴다.
//window는 창전체 즉 화면전체를 쓰는것이다.
//Clientwidth의 경우에는 magin,border 사이지를 무시함
//Clientwidth는 border 36px 사이즈를 인식하지 못하고,
//console.log(pointer.clientwidth)
//event객체에서 사용자의 x값을 가져와서, pointer의 가로값(36px)을 반값으로 나눈
//18px을 뺀다. EX)x값이100일경우, 100, 100 - 18, 82px, 커서는 위치가 82px