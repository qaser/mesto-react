import React from 'react';
import { api } from '../utils/Api';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getMyProfile()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch(err => `Данные пользователя не получены, ошибка: ${err}`);

        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch(err => `Данные карточек не получены, ошибка: ${err}`);
    }, []);

    return (
        <main class="content">
            <section class="profile">
                <div class="profile__user">
                    <button class="profile__button-avatar" type="button" onClick={props.onEditAvatar}>
                    <img class="profile__avatar" src="#" alt="Аватар пользователя" style={{ backgroundImage: `url(${userAvatar})` }}/>
                    </button>
                    <div class="profile__description">
                    <div class="intro">
                        <h1 class="intro__user-name">{userName}</h1>
                        <button class="button intro__edit-button" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p class="profile__occupation">{userDescription}</p>
                    </div>
                </div>
                <button class="button profile__button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section class="places">
                <ul class="list places__items">
                    { cards.map((card) => {
                        return (
                            <li className="places__item" id="">
                                <button class="button button_high-transparent places__basket" type="button"></button>
                                <img class="places__image" src={card.link} alt={card.name} />
                                <div class="places__footer">
                                    <h3 class="places__name">{card.name}</h3>
                                    <div class="places__like-area">
                                        <button class="button button_high-transparent places__like" type="button"></button>
                                        <h3 class="places__like-count">0</h3>
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </section>
      </main>
    );
}

export default Main
