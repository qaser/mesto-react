export const apiConfig = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: '2918e5e1-ec7f-40fa-9e65-9ce4b0a59553',
}

export const markupPopupPlace = (
    <>
        <label className="form__field">
            <input className="form__input" id="place-name" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="form__input-error" id="place-name-error" />
        </label>
        <label className="form__field">
            <input className="form__input" id="place-link" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="form__input-error" id="place-link-error"></span>
        </label>
    </>
);

export const markupPopupAvatar = (
    <label className="form__field">
        <input className="form__input" id="avatar-link" type="url" name="avatar" placeholder="Ссылка на картинку" required />
        <span className="form__input-error" id="avatar-link-error"></span>
    </label>
);

export const markupPopupProfile = (
    <>
        <label className="form__field">
            <input className="form__input" id="user-name" type="text" name="name" placeholder="Имя пользователя" required minLength="2" maxLength="40" />
            <span className="form__input-error" id="user-name-error"></span>
        </label>
        <label className="form__field">
            <input className="form__input" id="user-occupation" type="text" name="occupation" placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="form__input-error" id="user-occupation-error"></span>
        </label>
    </>
)
