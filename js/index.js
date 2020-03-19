`strict mode`
window.onload = () => {
    const input = document.querySelector('input');
    const addCity = document.querySelector('button');
    const deleteCity = document.querySelectorAll('.delete-card');
    const temp = document.querySelector('.temp');
    const userActions = new Interface(input, addCity, deleteCity, temp);

    const date = document.querySelector(`.today`);
    const dateTitle = new SetDate(date);
}