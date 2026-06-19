

let myVariable;


function multiply(num1, num2) {
    let result = num1 * num2;
    return result
}


document.querySelector("h1").addEventListener("click", function() {
    alert("预警预警")
})




const myImage = document.querySelector("img");
myImage.onclick = () => {
    const imageSrc = myImage.getAttribute("src");
    if (imageSrc === "images/image1.png") {
        myImage.setAttribute("src", "images/image2.png")
    } else {
        myImage.setAttribute("src", "images/image1.png")
    }
};

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"
let myButton = document.querySelector("button");


function setUserName() {
    const myName = prompt("输入你的名字");
    if (myName) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `this is tool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `this is tool, ${storeName}`
}

myButton.onclick = ()=> {
    setUserName();
}