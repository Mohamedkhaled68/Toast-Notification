const btn = document.querySelector('button');
const not_cont = document.getElementById("container");

btn.addEventListener('click', () => {
    showNotification();
});

function showNotification () {
    let notD = document.createElement('div');
    notD.className = 'noti-div'
    let text = document.createTextNode('wish you good day !!!');
    notD.appendChild(text);
    not_cont.appendChild(notD);

    setTimeout(() => {
        notD.remove()
    },3000)
}