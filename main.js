const form = document.querySelector('.my-form');
const inn = document.querySelector('#tiger');

lo();
function lo(){

document.addEventListener('DOMContentLoaded',rin)


}

function rin(e){
  console.log('hii')
  
  
  let tasks;
   if(localStorage.getItem('tasks') === null){
   tasks = [];
    
   }else{
    
    tasks = JSON.parse(localStorage.getItem('tasks'));
    
    }
   tasks.forEach(function(task){
  
    
     const ut = document.querySelector('ul');
     const list = document.createElement('li');
     const ac = document.createElement('a');
     const i = document.createElement('i');
    list.className = 'list-item1';
    
     ac.className = 'item';
     i.className = 'fa fa-remove icon'
     ac.appendChild(i)
    
    
     list.appendChild(document.createTextNode(task));
     list.appendChild(ac);
     ut.appendChild(list);
  console.log(task)
  
   })
  
  }




form.addEventListener('submit', function(e){
e.preventDefault();





if(inn.value === ''){
const btn = document.querySelector('.task');
const h = document.querySelector('h3');
const di = document.querySelector('.container');
let rr = h.previousElementSibling;
const p = document.createElement('p');



p.appendChild(document.createTextNode('Please enter your todo'));
p.setAttribute('class', 'dec')




let fu = rr.appendChild(p)

setTimeout(() => {
 
  fu.style.display = 'none';
fu.style.opacity = '0';

},3000)





}else{
//dom content loader

//Get Task





const ut = document.querySelector('ul');
const list = document.createElement('li');
const ac = document.createElement('a');
const i = document.createElement('i');
list.className = 'list-item1';

ac.className = 'item';
i.className = 'fa fa-remove icon'
ac.appendChild(i)


list.appendChild(document.createTextNode(inn.value));
list.appendChild(ac);
ut.appendChild(list);


islocal(inn.value);
e.target.user.value = '';
}
});


//local storage

function islocal(tas){
  let tasks;
  if(localStorage.getItem('tasks') === null){
  tasks = [];
  
  }else{
  
  tasks = JSON.parse(localStorage.getItem('tasks'));
  
  }
  tasks.push(tas);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  
  
  }














//remove
document.body.addEventListener('click', rom)
function rom(e){
if(e.target.parentElement.classList.contains('item')){
  e.target.parentElement.parentElement.remove()
//remove from ls
ls(e.target.parentElement.parentElement);
}


}

function ls(ti){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
    
    }else{
    
    tasks = JSON.parse(localStorage.getItem('tasks'));
    
    }
    


tasks.forEach(function(task, index){
  if(ti.textContent === task){
tasks.splice(index, 1);
localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  
})



    



}




 //all clear
  const sli = document.querySelector('.clear');
  sli.addEventListener('click', function(e){

let list = document.querySelectorAll('li');
list.forEach(function(e){
e.remove();

})

ls2();
  })
  function ls2(){
localStorage.clear();


  }
  

//filter
const text = document.querySelector('.tex');
text.addEventListener('keyup',filter);


function filter(e){

const rig = e.target.value.toLowerCase();


document.querySelectorAll('li').forEach(function(eit){
const tim = eit.firstChild.textContent;

 if(tim.toLowerCase().indexOf(rig) !== -1){
   eit.style.display = 'block';

  }else{
   eit.style.display = 'none';
  }


});


}






















