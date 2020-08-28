import React from 'react';
import Loader from '../Loader';

const withData = (View) => {
    return class extends React.Component {

        constructor() {
            super();
            this.state = {
                data: null,
            };
        };

        componentDidMount() {
            this.props.getData().then((data) => {
                    this.setState({
                        data,
                    });
                });
        };

        render() {
            const { data } = this.state;

            if (!data) {
                return <Loader />;
            };

            return <View {...this.props} data={data} />;
        };
    };
};

export default withData;