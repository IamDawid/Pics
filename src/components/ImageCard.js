import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
    }

    render() {

        const { description, urls } = this.props.image; //destructuring these properties for cleaner and easier code
        return (

            <div>
                <img ref={this.imageRef} alt={description} src={regular} />
            </div>

        );
    }
}

export default ImageCard;