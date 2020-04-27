import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans); //even listener with a callback function
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {

        const { description, urls } = this.props.image; //destructuring these properties for cleaner and easier code
        return (

            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>

        );
    }
}

export default ImageCard;