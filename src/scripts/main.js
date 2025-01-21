// Main Section
const mainFirst = document.querySelector('#main');

// Fragment Section
const firstFragment = './views/first.html';
const secondFragment = './views/second.html';
const thirdFragment = './views/third.html';

// Action Button
const firstFragmentButton = document.getElementById('first-fragment');
const secondFragmentButton = document.getElementById('second-fragment');
const thirdFragmentButton = document.getElementById('third-fragment');


firstFragmentButton.addEventListener('click', () => {
    fetch(firstFragment)
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