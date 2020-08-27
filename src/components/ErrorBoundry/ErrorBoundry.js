import React from 'react';
import './ErrorBoundry.css';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundry extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        };
        return this.props.children;
    };
};