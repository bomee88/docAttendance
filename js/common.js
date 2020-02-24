const body = document.querySelector("body");
const select = document.querySelector("select");
const btn = document.querySelectorAll(".btn-area button");
const optionIndex = 0;

function goAttendance(){ //all > 출첵 셀렉부분 클릭 시 링크이동
    const target = this;
    const optionTarget = target.options[target.selectedIndex].index
    console.log(optionTarget); 
    location.href=`attendance.html`;
}
function toggleClass(){ //attendance.html > 출첵 이름버튼 클릭시 온/오프
    const target = this;
    if (target.className==="on"){
        target.classList.remove('on');
    }else{
        target.classList.add('on');
    }
};


function init(){
select.addEventListener("change", goAttendance);    
btn.forEach((isBtn) => {
    console.log(isBtn);
    isBtn.addEventListener("click", toggleClass); //흑흑 성공했다.. 잊지말자 ㅠㅠ
});    

}

init();

