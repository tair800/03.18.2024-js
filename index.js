let dragTests = document.querySelectorAll(".dragTest");
let dropTests1 = document.querySelectorAll(".dropTest1");
let dropTests2 = document.querySelectorAll(".dropTest2");
let dropTests3 = document.querySelectorAll(".dropTest3");

let id;
dragTests.forEach(dragElm => {
    dragElm.ondragstart = function () {
        id = this.id
    }
})
dropTests1.forEach(dropElm => {
    dropElm.ondragover = function (e) {
        e.preventDefault();
    }
    dropElm.ondrop = function () {
        let dragELemId = document.getElementById(id);
        if (id === "1" || id === "2" || id === "3" || id === "4")
            dropElm.appendChild(dragELemId)
    }
});
dropTests2.forEach(dropElm => {
    dropElm.ondragover = function (e) {
        e.preventDefault();
    }
    dropElm.ondrop = function () {
        let dragELemId = document.getElementById(id);
        if (id === "5" || id === "6" || id === "7" || id === "8")
            dropElm.appendChild(dragELemId)
    }
});
dropTests3.forEach(dropElm => {
    dropElm.ondragover = function (e) {
        e.preventDefault();
    }
    dropElm.ondrop = function () {
        let dragELemId = document.getElementById(id);
        if (id === "9" || id === "10" || id === "11" || id === "12")
            dropElm.appendChild(dragELemId)
    }
});









