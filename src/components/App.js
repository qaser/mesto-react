import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api';
import { markupPopupPlace } from '../utils/constants.js';
import { markupPopupAvatar }  from '../utils/constants.js';
import { markupPopupProfile }  from '../utils/constants.js';
// import ImagePopup from './ImagePopup';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    // const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        // setSelectedCard(false);
      }

    return (
        <div class="page">
            <Header />
            <Main
                onEditAvatar = {handleEditAvatarClick}
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
            />
            <Footer />
            <PopupWithForm
                name = 'add-place'
                title = 'Новое место'
                isOpen = {isAddPlacePopupOpen}
                onClose = {closeAllPopups}
                titleButton = 'Создать'
                children = {markupPopupPlace}
            />
            <PopupWithForm
                name = 'edit-user'
                title = 'Редактировать профиль'
                isOpen = {isEditProfilePopupOpen}
                onClose = {closeAllPopups}
                titleButton = 'Сохранить'
                children = {markupPopupProfile}
            />
            <PopupWithForm
                name = 'add-avatar'
                title = 'Обновить аватар'
                isOpen = {isEditAvatarPopupOpen}
                onClose = {closeAllPopups}
                titleButton = 'Сохранить'
                children = {markupPopupAvatar}
            />

    {/* <div class="popup" id="popup-confirm-delete">
        <div class="popup__container">
            <button class="button popup__button-close" type="button"></button>
            <form class="form" name="confirm-delete" id="form-delete" novalidate>
                <h2 class="form__header">Вы уверены?</h2>
                <button class="button button_low-transparent form__button" type="submit">Да</button>
            </form>
        </div>
    </div> */}

    </div>
  );
}

export default App;
