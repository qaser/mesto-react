function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} id="popup-profile">
            <div class="popup__container">
                <button class="button popup__button-close" type="button" onClick={props.onClose}></button>
                <form class="form" name={props.name} id="form-profile" novalidate>
                    <h2 class="form__header">{props.title}</h2>
                    {props.children}
                    <button class="button button_low-transparent form__button" type="submit">{props.titleButton}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm
