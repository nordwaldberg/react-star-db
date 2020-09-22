export default class SwapiService {

  _apiBase = `https://swapi.dev/api`;
  _imageBase = `https://starwars-visualguide.com/assets/img`;

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    };
    const body = await res.json();
    return body;
  };

  getAllPersons = async () => {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPersonData);
  };

  getAllPlanets = async () => {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanetData);
  };

  getAllStarships = async () => {
    const res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarshipData);
  };

  getPerson = async (id) => {
    const person = await this.getResourse(`/people/${id}/`);
    return this._transformPersonData(person);
  };

  getPlanet = async (id) => {
    const planet = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanetData(planet);
  };

  getStarship = async (id) => {
    const starship = await this.getResourse(`/starships/${id}/`);
    return this._transformStarshipData(starship);
  };

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  _extractId = (item) => {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
  };      

  _transformPlanetData = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      orbitalPeriod: planet.orbital_period,
      gravity: planet.gravity,
      climate: planet.climate,
      terrain: planet.terrain,
      water: planet.surface_water,
    }; 
  };

  _transformPersonData = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      height: person.height,
      mass: person.mass,
    };
  };

  _transformStarshipData = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      costInCredits: starship.cost_in_credits,
      starshipClass: starship.starship_class,
      maxAtmoSpeed: starship.max_atmosphering_speed,
      hyperdriveRating: starship.hyperdrive_rating,
      pilots: starship.pilots,
    };
  };
};