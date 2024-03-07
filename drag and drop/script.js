const rightBox = document.getElementById('rightBox');
const leftBox = document.getElementById('leftBox');
const boxes = document.getElementsByClassName('lists');

for (const box of boxes) {
    box.addEventListener('dragstart', function (e) {
        let selected = e.target;
        rightBox.addEventListener('dragover', function (e) {
            e.preventDefault();
            rightBox.classList.add('bg-base-200', 'opacity-20');
        });

        rightBox.addEventListener('drop', function (e) {
            rightBox.appendChild(selected);
            box.classList.add('animate-pulse', 'animate-once');
            rightBox.classList.remove('bg-base-200', 'opacity-20');
            selected = null;
        });
        leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
            rightBox.classList.remove('bg-base-200', 'opacity-20');

        });

        leftBox.addEventListener('drop', function (e) {
            rightBox.classList.remove('bg-base-200', 'opacity-20');
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}