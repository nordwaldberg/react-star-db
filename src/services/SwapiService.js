export default class SwapiService {

  _apiBase = `https://swapi.dev/api`;

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    };
    const body = await res.json();
    return body;
  };

  async getAllPersons() {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPersonData);
  };

  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanetData);
  };

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarshipData);
  };

  async getPerson(id) {
    const person = await this.getResourse(`/people/${id}/`);
    return this._transformPersonData(person);
  };

  async getPlanet(id) {
    const planet = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanetData(planet);
  };

  async getStarship(id) {
    const starship = await this.getResourse(`/starships/${id}/`);
    return this._transformStarshipData(starship);
  };

  _extractId(item) {
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
      heigth: person.height,
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
      cargoCapacity: starship.cargo_capacity,
      starshipClass: starship.starship_class,
    };
  };
};