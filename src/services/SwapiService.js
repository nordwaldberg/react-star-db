export default class SwapiService {

    _apiBase = `https://swapi.dev/api`;
  
    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
      const body = await res.json();
      return body;
    };
  
    async getAllPeople() {
      const res = await this.getResourse(`/people/`);
      return res.results;
    };
  
    async getAllPlanets() {
      const res = await this.getResourse(`/planets/`);
      return res.results;
    };
  
    async getAllStarships() {
      const res = await this.getResourse(`/starships/`);
      return res.results;
    };
  
    getPerson(id) {
      return this.getResourse(`/people/${id}/`);
    };
  
    getPlanet(id) {
      return this.getResourse(`/planets/${id}/`);
    };
  
    getStarship(id) {
      return this.getResourse(`/starships/${id}/`);
    };
  
  };