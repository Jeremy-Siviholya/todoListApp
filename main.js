// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


const input=document.querySelector('input')
const button=document.querySelector('button')
const box=document.querySelector("#box")
const span=document.getElementById('span')


const handleAdd=()=>{

   if(input.value===''){
       alert('fill')
   }
   else{
    const l=input.value
    console.log(l);
   
    box.appendChild(document.getElementById("tasks").content.cloneNode(true))
      console.log(
        box.appendChild(
          document.getElementById("tasks")
        ).firstElementChild
      );
   }
  
}

button.addEventListener('click',handleAdd)
