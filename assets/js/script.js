let close_btn = document.getElementById('close-btn');
let popup =document.querySelector('.popup-overlay');

close_btn.addEventListener('click',function(){
    popup.style.display = 'none';
})