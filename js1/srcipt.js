let colorList = ['red', 'green', 'blue','pink','yellow','orange'];

let container = document.getElementById('color-container');
for (let i = 0; i < colorList.length; i++) {
    container.innerHTML += "<div class='color-picker'></div>"
}

let colorPicker = document.getElementsByClassName('color-picker');

let output = document.getElementById('output');

for (let i = 0; i < colorPicker.length; i++) {
    colorPicker[i].style.backgroundColor = colorList[i];
    colorPicker[i].addEventListener('click', function () {
        changeColor(colorList[i], i);
    })
}

changeColor = (color, active) => {
    for (let i = 0; i < colorPicker.length; i++) {
        colorPicker[i].classList.remove('active');

    }
    colorPicker[active].classList.add('active');
    output.style.backgroundColor = color;
}