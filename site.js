document.addEventListener("DOMContentLoaded", function() {
    var uploadButton = document.getElementById('uploadButton');
    var fileInput = document.getElementById('fileInput');
    
    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            window.location.href = 'mango.html';
        }
    });
});