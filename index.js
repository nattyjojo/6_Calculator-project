import mainCalculation from "./mainCalculator.js";

const display = document.createElement("section");
display.setAttribute("class", "display")
Object.assign(display.style,{
    paddingBottom:"100px",
    textAlign: "right",
    

})


const history = document.createElement("button")

history.textContent="History"
Object.assign(history.style,{
    border: "1px solid green",
    textAlign: "center",
    padding: "0px 2px 1px 5px",
    borderRadius: "7px",
    color: "green",
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "black",
})
const deleteInputButton = document.createElement("button");
deleteInputButton.textContent= "x";
const delHistory = document.createElement("section")
Object.assign(delHistory.style,{
    display: "flex",
    justifyContent: "space-between"
})
delHistory.append(history,deleteInputButton)
Object.assign(deleteInputButton.style,{
    border: "1px solid green",
    textAlign: "center",
    padding: "0px 2px 1px 5px",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "7px",
    color: "green",
    textAlign: "right",
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "black",
})

const hr = document.createElement("hr");

const clear  = document.createElement("button");
clear.classList="clear"
clear.textContent="C";
Object.assign(clear.style,{
    padding: "20px",
    maxWidth: "70px",
    maxHeight: "70px",
    margin: "5px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: "rgb(24, 23, 22)",
    fontWeight:"bolder",
    color: "red",
    cursor: "pointer",
    fontSize: "20px",
});
const bracket  = document.createElement("button");
bracket.setAttribute("class", "colorGreen")
bracket.textContent="( )";
const percentage  = document.createElement("button");
percentage.textContent="%";
percentage.setAttribute("class", "colorGreen")
const divide  = document.createElement("button");
divide.setAttribute("class", "colorGreen")
divide.textContent="/";
const numSeven  = document.createElement("button");
numSeven.textContent="7";
const numEight  = document.createElement("button");
numEight.textContent="8";
const numNine  = document.createElement("button");
numNine.textContent="9";
const multiply  = document.createElement("button");
multiply.setAttribute("class", "colorGreen")
multiply.textContent="x";
const numFour  = document.createElement("button");
numFour.textContent="4";
const numFive  = document.createElement("button");
numFive.textContent="5";
const numSix  = document.createElement("button");
numSix.textContent="6";
const substract  = document.createElement("button");
substract.setAttribute("class", "colorGreen")
substract.textContent="-";
const numOne  = document.createElement("button");
numOne.textContent="1";
const numTwo  = document.createElement("button");
numTwo.textContent="2";
const numThree  = document.createElement("button");
numThree.textContent="3";
const add  = document.createElement("button");
add.setAttribute("class", "colorGreen")
add.textContent="+";
const addSub  = document.createElement("button");
addSub.textContent="+/-";
const zero  = document.createElement("button");
zero.textContent="0";
const dot  = document.createElement("button");
dot.textContent=".";
const eqauls  = document.createElement("button");
eqauls.setAttribute("class", "colorGreen")
eqauls.setAttribute("class", "eqauls")
eqauls.textContent="=";
Object.assign(eqauls.style,{
    padding: "20px",
    maxWidth: "70px",
    maxHeight: "70px",
    margin: "5px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: "green",
    fontWeight:"bolder",
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
});

const inputs = document.createElement("section");
inputs.setAttribute("class", "inputs");
        

inputs.append(
    clear,
    bracket,
    percentage,
    divide,
    numSeven,
    numEight,
    numNine,
    multiply,
    numFour,
    numFive,
    numSix,
    substract,
    numOne,
    numTwo,
    numThree,
    add,
    addSub,
    zero,
    dot,
    eqauls,
);

Object.assign(inputs.style,{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    margin: '40px 0px 40px 0px',
    
})
const main = document.querySelector("main")
main.style.position= "relative"
//history
const historyUl = document.createElement("ul")
historyUl.classList="history"
Object.assign(historyUl.style,{
    maxHeight: '250px',
    overflow: 'scroll',
    marginBottom: '50px',
})
history.addEventListener("click", function(){
    const sectHistoryWrapper = document.querySelector(".sectHistoryWrapper")
    sectHistoryWrapper.style.display="block"

})
const clearHistory = document.createElement("button")
clearHistory.addEventListener("click", function(event){
    const sectHistoryWrapper = document.querySelector(".sectHistoryWrapper")
    const sectHistoryWrapperNodes = sectHistoryWrapper.childNodes[0]
    sectHistoryWrapper.removeChild(sectHistoryWrapperNodes)
    sectHistoryWrapper.style.display="none";
})
clearHistory.textContent= "clear history"
Object.assign(clearHistory.style,{
    marginLeft: '50%',
    padding: '5px',
    fontSize: '1em',
})
const sectHistory = document.createElement("section")
sectHistory.classList="sectHistoryWrapper"
Object.assign(sectHistory.style,{
    display: "none",
    height: '450px',
    position: 'absolute',
    backgroundColor: 'black',
    width: '250px',
    top: '150px',
    borderRight:'2px solid grey',
})
sectHistory.append(historyUl, clearHistory)


main.append(display, delHistory, hr, sectHistory, inputs,);

const mainWrapper = document.createElement('section')
Object.assign(mainWrapper.style,{
    maxWidth: '350px',
    margin: 'auto',
    padding:"20px",
    backgroundColor:"rgb(1, 1, 1)",
    color:"white",
    maxHeight: '100vh',
    borderRadius: "10px",
    display: "relative"
})

mainWrapper.appendChild(main)
const body = document.body.appendChild(mainWrapper)

const filterInput = (inputValue) =>{
    if(inputValue === "C" || inputValue === "="){
        mainCalculation(inputValue)

        
    }else{
        const display = document.querySelector(".display")
        display.textContent += inputValue
    }


}

const displayClickedInput = (event) =>{
    const value = event.target.textContent
    filterInput(value)

}
const styleInputs = () =>{
    const sectionInputs = document.querySelector(".inputs")
    for(let i = 0; i < sectionInputs.children.length; i++){
        const addEventClick = sectionInputs.children[i].addEventListener("click", displayClickedInput)
        if(!(sectionInputs.children[i].textContent === "C" || sectionInputs.children[i].textContent === "=")){
            Object.assign(sectionInputs.children[i].style,{
                padding: "20px",
                maxWidth: "70px",
                maxHeight: "70px",
                margin: "5px",
                borderRadius: "50%",
                textAlign: "center",
                backgroundColor: "rgb(24, 23, 22)",
                fontWeight:"bolder",
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
            });
        }
    
    }
}
styleInputs()


// added green color
const colorGreen = document.getElementsByClassName("colorGreen");
for(let x = 0; x < colorGreen.length; x++){
    colorGreen[x].style.color="green";

}
// function delete input from display
const deleteInput = () =>{
    const display = document.querySelector(".display")
    const getDisplaySectionTextContent = display.textContent;
    const sliced = getDisplaySectionTextContent.slice(0, -1)
    const replaced = sliced.replace([-1], "")
    display.textContent= replaced
}
// delete input from display
deleteInputButton.addEventListener("click", deleteInput)

// get keyboard input

body.addEventListener("keypress", function(event){
    const value = event.key;
    if(!isNaN(value)){
        const display = document.querySelector(".display")
        display.textContent += value
    }
});




