/* $(document).ready(function () {
    // Function to add a new item
    $('#addBtn').on('click', function () {
        var newItem = $('#newItem').val();
        if (newItem !== '') {
            // Append a new list item with buttons for crossing out and deleting
            $('#itemList').append('<li><span class="itemText">' + newItem + '</span><span class="delete">X</span></li>');
            $('#newItem').val(''); // Clear the input field
        }
    });

    // Function to toggle the "completed" and "strike" classes on item text
    $('#itemList').on('click', '.itemText', function () {
        $(this).toggleClass('completed strike');
    });

    // Function to delete an item
    $('#itemList').on('click', '.delete', function () {
        $(this).parent().remove();
    });
}); */

const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

function saveData() {
    localStorage.setItem("data", list - container.innerHTML);
}