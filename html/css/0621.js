const container = document.querySelector('.container')
const pages = container.querySelectorAll('.page')
const naver = document.querySelector('.naver')
const naveritems = naver.querySelectorAll('.btn')
//앞에 클래스를 부를때 맨끝에있는클래스는 꼭 s를 붙여야지 적용을 한다.//
naveritems.forEach((item,index) => {
  item.addEventListener('click', () => {
    //아무도 버튼을 누르던 액티브를 모두 제거
    //아무도 액티브를 갖고있지않는 상태이다
    naveritems.forEach(item => item.classList.remove('active'))
    item.classList.add('active')
    pages.forEach(item => item.classList.remove('active'))
    pages[index].classList.add('active')
  })
})

