
const datadark = document.getElementById('Dark')
console.log(datadark)
console.log("s")

// function clickhere(){
//     console.log("click")
//     if(!datadark.classList.contains('Dark'))
//     {
//         datadark.classList.remove('cb')
//          datadark.classList.add('Dark')
//     }else{
//    datadark.classList.remove('Dark')
//     datadark.classList.add('cb')
//     }
// }

function changemode(){
    console.log("click")
    if(!datadark.classList.contains('dark'))
    {       
         datadark.classList.remove('cb')
         datadark.classList.add('dark')
         
    }
    else{
        datadark.classList.remove('dark')
        datadark.classList.add('cb')
    }
}