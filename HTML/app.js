const iconmenu = document.querySelector('#iconmenu'),
 menu=document.querySelector('#menu');

 iconmenu.addEventListener('click',(e)=>{
     menu.classList.toggle('active')
    document.body.classList.toggle('opacity');

    const rutActual = e.target.getAttribute('src');

    if(rutActual=='img/menham.png'){
        e.target.setAttribute('src','img/menham2.png');
    }
    else{
        e.target.setAttribute('src','img/menham.png');
    }
 })

