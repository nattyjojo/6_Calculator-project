// history
const historyList = (input, result) => {
    const ulElement = document.querySelector(".history")
    const inputLiElement = document.createElement("li")
    inputLiElement.textContent = `${input}`
    const resultLiElement = document.createElement("li")
    resultLiElement.textContent = `= ${result}`
    ulElement.append(inputLiElement, resultLiElement)

    console.log(input + result)
    //const calculated = `${inputValue} = ${result}`
}
export default historyList