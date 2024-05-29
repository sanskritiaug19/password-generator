const generateButtonEl = document.querySelector('.generate-button');
const uppercaseCheckboxEl=document.querySelector(".uppercase-checkbox");
const lowercaseCheckboxEl=document.querySelector(".lowercase-checkbox");
const numbersCheckboxEl=document.querySelector(".numbers-checkbox");
const symbolsCheckboxEl=document.querySelector(".symbols-checkbox");
const passwordDisplayEl =document.querySelector(".Password-display");
const passwordLengthInputEl=document.querySelector(".input-length");
const copyButtonEl=document.querySelector(".copy-button");
const symbols="!@#$%^&*()_-+=<>?/:;{}[]";
let password="";
function getRandomIntger(min, max)
{
    return Math.floor(Math.random() * (max-min))+min;
}
//console.log(getRandomIntger(10,20));
function getRandomUppercase()
{
    return String.fromCharCode(getRandomIntger(65,91));
}
//console.log(getRandomUppercase());
function getRandomLowercase()
{
    return String.fromCharCode(getRandomIntger(97,123));
}
//console.log(getRandomLowercase());
function getRandomNumber()
{
    return String(getRandomIntger(0,10));
}
//console.log(getRandomNumber());
function getRandomSymbol()
{
    const index = getRandomIntger(0, symbols.length);
    return symbols.charAt(index);
}
//console.log(getRandomSymbol());
generateButtonEl.addEventListener('click',function(){
    password="";
    let passwordLength= passwordLengthInputEl.value;
    const funcArray=[];
    if(uppercaseCheckboxEl.checked)
    {
        password=password+getRandomUppercase();
        funcArray.push(getRandomUppercase); 
    }
    if(lowercaseCheckboxEl.checked)
    {
        password=password+getRandomLowercase();
        funcArray.push(getRandomLowercase); 
    }
    if(numbersCheckboxEl.checked)
    {
        password=password+getRandomNumber();
        funcArray.push(getRandomNumber); 
    }
    if(symbolsCheckboxEl.checked)
    {
        password=password+getRandomSymbol();
        funcArray.push(getRandomSymbol); 
    }
    for(let i=0; i<passwordLength-funcArray.length; i++)
    {
        const index = getRandomIntger(0,funcArray.length);
        password=password+funcArray[index]();
    }
    console.log(funcArray); 
    console.log(password);
    passwordDisplayEl.value=password;
});
copyButtonEl.addEventListener('click',copyToClipboard);
async function copyToClipboard()
{ try{
    await navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
}
catch(error){
   console.error("failed to copy password to clipboard",error);
}
}

