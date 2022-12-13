// document.getElementById('#text').innerHTML='this is js handson'

// document.getElementsByTagName('h1').innerHTML='to change mytext'

// document.getElementsByClassName('.box').innerHTML='this is js handson'

// document.getElementsByTagName('h2').innerHTML='Hello Word'

// // document.querySelectorbytagname('button').addEventListener('click',(e)=> { 
// // e.preventdefault()

// // document.querySelector('.main-flex').style.flexDirection = 'row'

// // })

// function onclickbutton(){
    
//     if( flexDirection == column){
//         document.getElementsByClassName('main-flex').style.flexDirection = 'row'
//     }
//     else {
//         document.getElementsByClassName('main-flex').style.flexDirection = 'column'
//     }   
// }



// const abhi = document.getElementsByTagName('h3')[0]
// abhi.setAttribute('id','heading')
// const sec = document.getElementById('heading')
// sec.style.color = 'red'
 
setInterval(() =>{
    var date = new Date()
    var hrs = date.getHours()
   var mint = date.getMinutes()
    var seco = date.getSeconds()
     
   
   document.querySelector('#hr').textContent = hrs
   document.querySelector('#min').textContent = mint
   document.querySelector('#sec').textContent = seco

},1000)
