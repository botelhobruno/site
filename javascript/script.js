const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    const contents => document.querySelectorAll('.content');

    contents.forEach(content => content.classList.remove('show'));

    const contendId = tab.getAttribute('content-id');

    console.log(contendId);
}