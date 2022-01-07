// 1 - Select the section with an id of container without using querySelector.
let containerEl = document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.
containerEl = document.querySelector("#container")

// 3 - Select all of the list items with a class of "second".
let listEl = document.getElementsByClassName("second")

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
let listThird = document.querySelector("ol .third")

// 5 - Give the section with an id of container the text "Hello!".
let helloText = document.createElement("h2")
helloText.innerText="Hello!"
containerEl.appendChild(helloText)
// 6 - Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer")
footer.classList.add("main")

// 7 - Remove the class main on the div with a class of footer.
footer.classList.remove("main")

// 8 - Create a new li element.
let newEl = document.createElement("li")

// 9 - Give the li the text "four".
newEl.innerText = "four"

// 10 - Append the li to the ul element.
document.querySelector("ul").appendChild(newEl)

// 12 - Loop over all of the lis inside the ol tag and give them a background color of "green".
let listColor = document.querySelectorAll("ol li")
listColor.forEach((el) => el.style.backgroundColor="green")

// 13 - Remove the div with a class of footer.
footer.remove()