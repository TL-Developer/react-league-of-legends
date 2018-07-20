import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Champion extends Component {
    render() {
        return (
            <div className="champion">
                <img className="champion__image" alt={this.props.name} src={`//media.services.zam.com/v1/media/byName/lolking/img/champions/tile/${this.props.id}.png?crop_x=10&crop_y=10&crop_width=100&crop_height=100&width=64`} />
                <section>
                    <p>{this.props.name}</p>
                </section>
            </div>
        );
    }
}

Champion.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
}

export default Champion;