let searchBtn=document.getElementById('searchBtn');
let searchDiv=document.querySelector('.Search-div');
let closeSearch=document.getElementById('closeSearch');
let searchInput=document.getElementById('searchInput');
let navToggleBtn =document.querySelector('.nav-toggle')
let navToggle=document.querySelector('.nav-toggle-icon');
let header=document.querySelector('.Header');
navToggleBtn.addEventListener('click',(e)=>
{
    e.preventDefault();
    navToggle.classList.toggle('active');
})
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    searchDiv.classList.toggle('active');
    searchInput.classList.toggle('active');
    navToggle.classList.toggle('active');
})
closeSearch.addEventListener('click',(e)=>{
    e.preventDefault();
    searchDiv.classList.remove('active');
    searchInput.classList.remove('active')
})

window.onscroll=function()
{
    if(window.scrollY>0)
    {
        header.style.backgroundColor='var(--secondary-color-light)';
        header.style.boxShadow='1px 1px 15px rgba(121,121,121,.1)'
    }else if(window.scrollY==0)
    {
        header.style.backgroundColor='transparent'
        header.style.boxShadow='0px 0px 0px rgba(121,121,121,.1)'
    }
}
