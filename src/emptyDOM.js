export default emptyDOM;
function emptyDOM() {
    const emptyDOMElem = document.createElement("div");
    emptyDOMElem.classList.add("emptyText");
    const text1 = document.createElement("h2");
    text1.textContent = "No Project is Selected.";
    const text2 = document.createElement("h4");
    text2.textContent = "Please Select a project or Add a New One.";
    text2.setAttribute("style","font-style: italic;")

    emptyDOMElem.appendChild(text1);
    emptyDOMElem.appendChild(text2);
    return emptyDOMElem;
}