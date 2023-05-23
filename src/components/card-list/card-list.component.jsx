import { Component } from 'react';

import Card from '../card/card.component'

import './card-list.styles.css';

class CardList extends Component {
    render() {
        console.log('render')
        const { dogs } = this.props;

        return (
            <div className='card-list'>
            {dogs.map((dogs) => {
                
                return(
                    <Card dogs={dogs} />

        )})}
            </div>
        );
    }
}

export default CardList;