import Headline from '../components/Headline';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { Component } from '../core';

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;

    this.el.classList.add('container');
    this.el.append(headline, search, movieList);
  }
}
