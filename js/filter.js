let filterToggle=document.querySelectorAll('.filter-toggle');
let filterSec=document.querySelectorAll('.main-sec1-filter-sec');
console.log(filterToggle)
console.log(filterSec)

for(let i=0;i<filterToggle.length;i++)
{
    filterToggle[i].addEventListener('click',()=>
    {
        filterSec.forEach(sec=>
        {
            sec.classList.remove('active')
        })
        filterToggle.forEach(btn=>
        {
            btn.classList.remove('active')
        })
        filterSec[i].classList.add('active');
        filterToggle[i].classList.add('active')
    })
}