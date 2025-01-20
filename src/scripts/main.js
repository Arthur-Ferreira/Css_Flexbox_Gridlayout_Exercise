const fragment = './views/second.html';
const mainFirst = document.querySelector('#first');
const testButton = document.getElementById('test');

testButton.addEventListener('click', () => {
    fetch(fragment)
    .then(response => {
        if(!response.ok){
            throw new Error('Error fetching the file');
        }
        return response.text();
    })
    .then(html => {
        mainFirst.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });
})

