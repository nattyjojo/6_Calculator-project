
const inputCalculation = (input) =>{
    const finalCalculation = (val, op) => {
        let final = Number(val[0]) ;
        val.shift()
        for(let i  = 0; i < op.length; i++){
           switch(op[i]){

            case '+':
                final += Number(val[0])
                val.shift()
                break;
            case '-':
                final -= Number(val[0])
                val.shift()
                break;
            case 'x':
                final *= Number(val[0])
                val.shift()
                break;

            case '/':
                final /= Number(val[0])
                val.shift()
                break;
            default:
                console.log('erro')
            }
        }
        console.log(final)
        
    }
    const mainCalculation = () =>{
       
        let displayText = document.querySelector(".display")
        let inputValue = displayText.textContent
        let values = [];
        let numbersValue = "";
        let operators = [];
        for(let i = 0; i < inputValue.length; i++){
            if(inputValue[i] === "+" || inputValue[i] === "-" || inputValue[i] === "x" || inputValue[i] === "/"){
               operators.push(inputValue[i])
               values.push(numbersValue)
               numbersValue= "";
            }else{
                numbersValue += inputValue[i]

            }
        }
        values.push(numbersValue)
        finalCalculation(values, operators)

     
       
    }
  

    if (input === "C"){
        const displayinput = document.querySelector(".display")
        displayinput.textContent="";
        
    }else{
        input === "="
        mainCalculation()
    }   
}
export default inputCalculation;