import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import { markupPopupPlace } from '../utils/constants.js';
import { markupPopupAvatar }  from '../utils/constants.js';
import { markupPopupProfile }  from '../utils/constants.js';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(null);
      }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar = { handleEditAvatarClick }
                onEditProfile = { handleEditProfileClick }
                onAddPlace = { handleAddPlaceClick }
                onCardClick = { handleCardClick } // проброс обработчика открытия карточки
            />
            <Footer />
            <PopupWithForm
                name = 'add-place'
                title = 'Новое место'
                isOpen = { isAddPlacePopupOpen }
                onClose = { closeAllPopups }
                titleButton = 'Создать'
                children = { markupPopupPlace }  // разметка в отдельном файле
            />
            <PopupWithForm
                name = 'edit-user'
                title = 'Редактировать профиль'
                isOpen = { isEditProfilePopupOpen }
                onClose = { closeAllPopups }
                titleButton = 'Сохранить'
                children = { markupPopupProfile }
            />
            <PopupWithForm
                name = 'add-avatar'
                title = 'Обновить аватар'
                isOpen = { isEditAvatarPopupOpen }
                onClose = { closeAllPopups }
                titleButton = 'Сохранить'
                children = { markupPopupAvatar }
            />
            <ImagePopup
                card = { selectedCard }
                onClose = { closeAllPopups }
            />
    </div>
  );
}

export default App;
