document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed'); // Check if the script is executed

    var uploadButton = document.getElementById('uploadButton');
    var fileInput = document.getElementById('fileInput');

    console.log('Upload button:', uploadButton); // Debugging log
    console.log('File input:', fileInput); // Debugging log

    // Ensure the elements are not null
    if (uploadButton && fileInput) {
        uploadButton.addEventListener('click', function() {
            console.log('Upload button clicked'); // Log button click
            fileInput.click(); // Trigger the file input dialog
        });
        
        fileInput.addEventListener('change', function(event) {
            var file = event.target.files[0];
            if (file) {
                console.log('File selected:', file.name);
                // Redirect to mango.html after file selection
                window.location.href = 'mango.html';
            }
        });
    } else {
        console.error("Upload button or file input not found.");
    }
});
