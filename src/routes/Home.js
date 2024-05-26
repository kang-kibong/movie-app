import Headline from '../components/Headline';
import { Component } from '../core';

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    this.el.classList.add('container');
    this.el.append(headline);
  }
}
