function Beer(props) {
    const image = require(`./../data/images/${props.info.image}`);
    return (
        <div className="beerCard">
            <button className="imageButton">
                <img src={image} alt={props.info.image} />
                <img src={image} alt={props.info.image} className="imageViewer"/>
            </button>
            <p className="beerName">{props.info.name}</p>
            <p className="beerDescription">{props.info.description}</p>
            <p className="beerAbv">ABV: {props.info.abv}</p>
            <p className="beerPrice">Price: {props.info.price},00 HUF</p>
        </div>
    )
}

export default Beer;