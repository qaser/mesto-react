import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setСurrentUser] = React.useState(null);
    const [cards, setCards] = React.useState([]);

    function handleAddPlace({name, link}) {
        api.addNewCard({name, link})
            .then((newCard) => {
                setCards([newCard, ...cards]);
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (isLiked) {
            api.dislikeCard(card._id)
            .then((newCard) => {
                setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
        } else {
            api.likeCard(card._id)
            .then((newCard) => {
                setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((item) => {
                  return item._id !== card._id;
                }))
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }

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

    function handleUpdateUser(currentUser) {
        api.editMyProfile({name: currentUser.name, occupation: currentUser.about})
            .then((userData) => {
                setСurrentUser(userData);
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }

    function handleUpdateAvatar(avatar) {
        api.changeAvatar(avatar)
            .then((userData) => {
                setСurrentUser(userData);
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }

    React.useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards)
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }, []);

    React.useEffect(() => {
        api.getMyProfile()
            .then((userData) => {
                setСurrentUser(userData);
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }, []);

    return (
        <CurrentUserContext.Provider value={ currentUser }>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={ handleEditAvatarClick }
                    onEditProfile={ handleEditProfileClick }
                    onAddPlace={ handleAddPlaceClick }
                    onCardClick={ handleCardClick } // проброс обработчика открытия карточки
                    cards={ cards }
                    onCardLike={ handleCardLike }
                    onCardDelete={ handleCardDelete }
                />
                <Footer />
                <AddPlacePopup
                    isOpen={ isAddPlacePopupOpen }
                    onClose={ closeAllPopups }
                    addPlace={ handleAddPlace }
                />
                <EditProfilePopup
                    isOpen={ isEditProfilePopupOpen }
                    onClose={ closeAllPopups }
                    onUpdateUser={ handleUpdateUser }
                />
                <EditAvatarPopup
                    isOpen={ isEditAvatarPopupOpen }
                    onClose={ closeAllPopups }
                    onUpdateAvatar={ handleUpdateAvatar }
                />
                <ImagePopup
                    card={ selectedCard }
                    onClose={ closeAllPopups }
                />
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
