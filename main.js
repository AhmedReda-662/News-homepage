const openList = document.getElementById("open-list");
const closeList = document.getElementById("close-list");

openList.addEventListener('click', _ => {
    const list = document.getElementById("list");
    if (!list.classList.contains('open-list')) {
        list.classList.add('active');
    }
    if (!document.body.classList.contains('overlay')) {
        document.body.classList.add('overlay');
    }
});

closeList.addEventListener('click', _ => {
    const list = document.getElementById("list");
    if (list.classList.contains('active')) {
        list.classList.remove('active');
    }
    if (document.body.classList.contains('overlay')) {
        document.body.classList.remove('overlay');
    }
})