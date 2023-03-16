document.addEventListener('DOMContentLoaded', function() {
    fetch('/api')
    .then(response => response.json())
    .then(data => {
        document.getElementById('asdf').textContent = JSON.stringify(data);
    })
})