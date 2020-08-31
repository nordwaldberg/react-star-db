import React from 'react';
import './RandomPlanet.css';
import swapiService from '../../services/SwapiService';
import Loader from '../Loader';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends React.Component {
    constructor() {
        super();
        this.state = {
            planet: {},
            loading: true,
            error: false,
        };
    };

    static defaultProps = {
        updateTime: 2500
    };

    static propTypes = {
        updateTime: (props, propName, componentName) => {
            const value = props[propName];

            if (typeof value === 'number' && !isNaN(value)) {
                return null;
            };

            return new TypeError(`${componentName}: ${propName} should be a number`);
        }
    };

    swapiService = new swapiService();

    componentDidMount() {
        const { updateTime } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateTime);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    updatePlanet = () => {
        const id = Math.floor((Math.random() * 17) + 2);
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    };

    render() {

        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);

        const loader = loading ? <Loader /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        const errorIndicator = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {loader}
                {content}
                {errorIndicator}
            </div>
        );
    };
};

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};