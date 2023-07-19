// global var
var nameInput = document.getElementById('Name');
var urlInput = document.getElementById('URL');
var content = document.getElementById('tableContent');

//for first time 
if (localStorage.getItem('UrlData') != null) {
    var allBook = JSON.parse(localStorage.getItem('UrlData'));
    showData();
} else {
    var allBook = [];
}

function add() {
    var bookUrl = {
        name: nameInput.value,
        url: urlInput.value
    }
    allBook.push(bookUrl);
    console.log(bookUrl);
    console.log(allBook);
    localStorage.setItem('UrlData', JSON.stringify(allBook));

    showData()
}


function showData() {
    var trs = '';
    for (let i = 0; i < allBook.length; i++) {
        trs +=
            `<tr>
        <td><p>${i + 1}</p></td>
        <td><p>${allBook[i].name}</p></td>              
        <td>
            <button  onclick="visitPage(${i})" class="btn btn-visit">
            <i class="fa-solid fa-eye pe-2"></i>Visit
            </button>
        </td>
        <td>
            <button onclick="deleteItem(${i})"  class="btn btn-delete ">
            <i class="fa-solid fa-trash-can"></i>
            Delete
            </button>
        </td>
        </tr>`;
    }
    content.innerHTML = trs;
}


function deleteItem(index) {
    allBook.splice(index, 1);
    localStorage.setItem('UrlData', JSON.stringify(allBook));

    showData();
}

function visitPage(index) {
    window.open(allBook[index].url, "_blank");
}