import Beer from './Beer';

function Beers({beersArray}) {
    return (
        <div className='beerGrid'>
            {beersArray.map((item, index) => <Beer info = {item} key = {index}/>)}
        </div>
    )
}

export default Beers;