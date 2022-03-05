import React from 'react';
import { api } from '../utils/Api';
import Card from './Card'

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getMyProfile(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cards)
            })
            .catch(err => `Данные не получены, ошибка: ${ err }`);
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__user">
                    <button className="profile__button-avatar" type="button" onClick={ props.onEditAvatar }>
                    <img className="profile__avatar" src={ userAvatar } alt="Аватар пользователя" />
                    </button>
                    <div className="profile__description">
                    <div className="intro">
                        <h1 className="intro__user-name">{ userName }</h1>
                        <button className="button intro__edit-button" type="button" onClick={ props.onEditProfile }></button>
                    </div>
                    <p className="profile__occupation">{ userDescription }</p>
                    </div>
                </div>
                <button className="button profile__button" type="button" onClick={ props.onAddPlace }></button>
            </section>

            <section className="places">
                <ul className="list places__items">
                    { cards.map(( card ) => {
                        return (
                            <Card
                                card = { card }
                                // вот здесь обработчик открытия уходит на карточку
                                onCardClick={ props.onCardClick }
                                key = { card._id } // сделал чтобы ушла ошибка "уникальный ключ для карточки"
                            />
                        )
                    })}

                </ul>
            </section>
      </main>
    );
}

export default Main
