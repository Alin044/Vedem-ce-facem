const language = document.querySelector('#language');
const studies = document.querySelector("#studies");
const btnStudies = document.querySelector('#studiesBtn');
const btnLanguage = document.querySelector('#languagesBtn');

btnStudies.addEventListener('click', () => {
    studies.style.display = 'block';
    language.style.display = 'none'; 
});

btnLanguage.addEventListener('click', () => {
    language.style.display = 'block';
    studies.style.display = 'none';
})

    