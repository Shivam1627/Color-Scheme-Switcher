const button = document.querySelectorAll('.button');
const body = document.querySelector('body')

console.log(button);

button.forEach((element)=>{
    // console.log(element)
    element.addEventListener('click',(e)=>{
        console.log(e); 
        console.log(e.target);
        if(e.target.id=="grey")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id=="white")
        {
            body.style.backgroundColor="#F8F8FF";
        }
        else if(e.target.id=="blue")
        {
            body.style.backgroundColor="royalblue";
        }
        else if(e.target.id=="yellow")
        {
            body.style.backgroundColor=e.target.id;
            // body.style.background = "linear-gradient(to right, #0f0c29, #302b63, #24243e)";
        }
    })
})