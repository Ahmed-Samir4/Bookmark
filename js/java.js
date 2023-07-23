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

//for Names 
if (localStorage.getItem('allNames') != null) {
    var allName = JSON.parse(localStorage.getItem('allNames'));
    showData();
} else {
    var allName = [];
}


function add() {
    if (nameInput.value == '' || urlInput.value == '') {
        alert('Please enter the Name and the URL');
    } else if (urlInput.value.includes('.com') || urlInput.value.includes('.net') || urlInput.value.includes('.org') || urlInput.value.includes('.edu') || urlInput.value.includes('.gov') || urlInput.value.includes('.mil')) {
        if (allName.includes(nameInput.value)) {
            alert('This Name is used. \nPlease enter new Name');
        } else {
            var bookUrl = {
                name: nameInput.value,
                url: urlInput.value
            }
            allBook.push(bookUrl);
            localStorage.setItem('UrlData', JSON.stringify(allBook));
            allName.push(nameInput.value)
            localStorage.setItem('allNames',JSON.stringify(allName))
            nameInput.value = '';
            urlInput.value = '';
        }

    } else {
        alert('Please enter a valid URL domain \n it must contain ( .com , .net , .org , .edu , .gov , .mil ) ');
    }


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
    window.open(`https://${allBook[index].url}/`, "_blank");
}