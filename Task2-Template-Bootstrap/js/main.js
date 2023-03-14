
$('.seemoreanchortag').on('click', function() {
    $('.seemorecontent').toggleClass('hidden');
});

// $('.menubar').on('click', function() {
//     $('.navbaritems').toggleClass('hidden');
// });

const menu=document.querySelector('.menubar');
const navbaritems=document.querySelector('.navbaritems');

navbaritems.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})