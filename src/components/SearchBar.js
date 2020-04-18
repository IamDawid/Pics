import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {  //going with the function to avoid the 'undefined' error

        event.preventDefault(); //disables the default submit behaviour

        console.log(this.state.term);

    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input //this is a controlled element, means all data is stored in and driven by React
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }

};

export default SearchBar;