let buttons=document.querySelectorAll('button')
let screen=document.getElementById("curr")
let screenValue='';
for(items of buttons)
{
    items.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText == "x")
        {
            buttonText="*";
            screenValue+=buttonText;
            screen.innerText=screenValue;
            
        }
        else if(buttonText == "AC")
        {
            screen.innerText="";
            screenValue='';
        }
        else if(buttonText =="=")
        {
            screen.innerText=eval(screenValue);
        }
        else{
            screenValue +=buttonText;
            screen.innerText= screenValue;
        }

     })
}
     