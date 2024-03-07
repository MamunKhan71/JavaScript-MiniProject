const rightBox = document.getElementById('rightBox');
const leftBox = document.getElementById('leftBox');
const boxes = document.getElementsByClassName('lists');

for(const box of boxes){
    box.addEventListener('dragstart', function (e) {
        let selected = e.target;
        rightBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        rightBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            box.classList.add('animate-pulse', 'animate-once');
            selected = null;
        });
        leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        leftBox.addEventListener('drop', function(e){
            box.classList.remove('animate-pulse', 'animate-once');

            leftBox.appendChild(selected);
            selected = null;
        });
    });
}