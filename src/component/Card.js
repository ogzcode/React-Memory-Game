function Card(props) {
    return (
        <div className={props.active ? "card__box visible" : "card__box"} onClick={() => props.onClick(props.index)}>
            <img src={props.image} alt="bee" className="card card__back" />
            <p className='card card__front'>?</p>
        </div>
    );
}

export default Card;