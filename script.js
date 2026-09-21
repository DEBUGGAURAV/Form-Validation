let nm=document.querySelector("#name");
let form=document.querySelector("form");


form.addEventListener("submit",(dets)=>{
    dets.preventDefault();


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let ans=emailRegex.test("abcd@gamil.com");
console.log(ans);

// if(nm.value.length<=2) {
// document.querySelector("#hide").style.display ="initial"
// }
// else{
//     document.querySelector("#hide").style.display ="none"
// }
}); 