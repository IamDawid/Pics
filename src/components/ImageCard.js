import React from 'react';

class ImageCard extends React.Component {

    render() {

        const { description, urls } = this.props.image; //destructuring these properties for cleaner and easier code
        return (

            <div>
                <img alt={description} src={regular} />
            </div>

        );
    }
}

export default ImageCard;