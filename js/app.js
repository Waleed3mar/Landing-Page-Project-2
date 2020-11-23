
//links creation
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const ullist = document.createElement('ul')
fragment.appendChild(ullist);

for(let i = 0; i < sections.length; i++){

    const lione = document.createElement('li');
    ullist.appendChild(lione);
    lione.innerHTML = `<a class="link" href="#${sections[i].id}">${sections[i].id}</a>`; 

}
//adding links to Html
const setInNav = document.querySelector('nav');
setInNav.appendChild(fragment);

//Styling
const navLinks = document.getElementsByClassName('link');
const sec = document.getElementsByClassName('section');
function isInViewport(i) 
{
    const rect = sections[i].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    
};

for (let i = 0; i < sec.length; i++) {
    document.addEventListener("scroll", function() 
    {
        if (isInViewport(i)===true){
            sec[i].classList.add('your-active-class')
            navLinks[i].classList.add('active-link')
        }
        else {
            sec[i].classList.remove('your-active-class')
            navLinks[i].classList.remove('active-link')
        }
    }
  );
}

const botn = document.getElementById('btn');
botn.addEventListener('click',function(){
if(ullist.className=='hide-Nav'){
    ullist.classList.remove('hide-Nav')
}
else{
    ullist.classList.add('hide-Nav')
}
});
