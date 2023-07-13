import historyList from "./historySection.js";
const mainCalculation = (input) => {
    const displayinput = document.querySelector(".display");
    let inputValue = displayinput.textContent;
    const calculation = (str) =>{
        return Function('return ' + str)();
    }
    if (input === "C"){
        
        displayinput.textContent="";
        
    }else{
        input === "="
        if(inputValue.includes("x")){
            let UpdatedInputValue = '';
            for(let i = 0; i < inputValue.length; i++){
                if(inputValue[i] === 'x'){
                    UpdatedInputValue += "*"
                   
                }else{
                    UpdatedInputValue += inputValue[i]
                }

            }
            const result = calculation(UpdatedInputValue)
            displayinput.textContent = result
            historyList(inputValue, result)
        }else{
            const result = calculation(inputValue)
            displayinput.textContent = result
            historyList(inputValue, result)

        }
       
    } 

}
export default mainCalculation