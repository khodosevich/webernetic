import "./style/index.scss"

const linkTryFree = document.getElementById('contact')!;
const modal = document.getElementById('modal')!;
const closeModal = document.getElementById('modal-close')!;
const modalBody = document.getElementById('modal-body')!;

const loadModal = () => {
    modalBody.innerHTML = `
        <div class="modal__title">Войти в систему</div>
        <div class="modal__inputs">
            <input type="text" placeholder="Email/Телефон" class="modal__input">
            <input type="password" placeholder="Пароль" class="modal__input">
        </div>
        <div class="modal__check">
            <input type="checkbox">
            <div class="modal__check-title">Запомнить пароль</div>
        </div>
        <div class="modal__recover">Восстановить</div>
        <div class="modal__btns">
            <button class="modal__login">Войти</button>
            <button class="modal__registration">Зарегистрироваться</button>
        </div>`
    ;
}

linkTryFree.addEventListener('click', () => {
    modal.classList.toggle('open');
    loadModal();
});

closeModal.addEventListener('click', () => {
    modal.classList.toggle('open');
});