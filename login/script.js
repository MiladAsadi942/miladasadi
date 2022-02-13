let signs = document.getElementById('conti-hidee');
let logins = document.getElementById('conti-login');
let btnsign = document.getElementById('btn-sign');
let anim = document.getElementById('anim');


btnsign.addEventListener('click' , function(e){
   
    signs.style.display = 'block';
    logins.style.display = 'none'; 
    e.preventDefault();
   
})

let btnlogin = document.getElementById('btn-log');

btnlogin.addEventListener('click' , function(e){

    logins.style.display = 'flex';
    signs.style.display = 'none';
    e.preventDefault();



})

let resbtn = document.getElementById('resbtn');

resbtn.addEventListener('click' , function(e){
    signs.style.display = 'block';
    logins.style.display = 'none'; 
    e.preventDefault();
})

let resbtn2 = document.getElementById('resbtn2');

resbtn2.addEventListener('click' , function(e){
    
    logins.style.display = 'flex';
    signs.style.display = 'none';
    e.preventDefault();
   

})

