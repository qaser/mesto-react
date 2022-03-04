function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="places__item" id={ props.card._id }>
            <button className="button button_high-transparent places__basket" type="button"></button>
            <img className="places__image" onClick={ handleClick } src={ props.card.link } alt={ props.card.name } />
            <div className="places__footer">
                <h3 className="places__name">{ props.card.name }</h3>
                <div className="places__like-area">
                    <button className="button button_high-transparent places__like" type="button"></button>
                    <h3 className="places__like-count">{ props.card.likes.length }</h3>
                </div>
            </div>
        </li>
    )
}

export default Card
