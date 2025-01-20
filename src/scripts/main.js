// Main Section
const mainFirst = document.querySelector('#first');

// Fragment Section
const secondFragment = './views/second.html';
const thirdFragment = './views/third.html';
const forthFragment = './views/forth.html';

// Action Button
const secondFragmentButton = document.getElementById('secondFragment');
const thirdFragmentButton = document.getElementById('thirdFragment');
const forthFragmentButton = document.getElementById('forthFragment');


secondFragmentButton.addEventListener('click', () => {
    fetch(secondFragment)
        .then(response => {
            if (!response.ok) {
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
});


thirdFragmentButton.addEventListener('click', () => {
    fetch(thirdFragment)
        .then(response => {
            if (!response.ok) {
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
});


forthFragmentButton.addEventListener('click', () => {
    fetch(forthFragment)
        .then(response => {
            if (!response.ok) {
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
});

