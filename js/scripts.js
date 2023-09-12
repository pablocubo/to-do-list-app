$(document).ready(function () {
    // Function to add a new item
    $('#addBtn').on('click', function () {
        var newItem = $('#newItem').val();
        if (newItem !== '') {
            // Append a new list item with buttons for crossing out and deleting
            $('#itemList').append('<li><span class="itemText">' + newItem + '</span><span class="delete">X</span></li>');
            $('#newItem').val(''); // Clear the input field
        }
    });

    // Function to cross out an item
    $('#itemList').on('click', '.itemText', function () {
        $(this).toggleClass('completed');
    });

    // Function to delete an item
    $('#itemList').on('click', '.delete', function () {
        $(this).parent().remove();
    });
});
