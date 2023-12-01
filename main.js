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
const alertDanger = document.querySelector(".danger-alert");


const handleAdd=(e)=>{
   if(input.value==='' ){    
       alertDanger.classList.add('show')
   }
   else{
    const l=input.value
    let nodeL = document.getElementById("tasks").content.cloneNode(true);
    box.appendChild(nodeL)
   console.log( nodeL.hasChildNodes());

   }
  
}

button.addEventListener('click',handleAdd)
