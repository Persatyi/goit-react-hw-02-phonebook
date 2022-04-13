import s from './Filter.module.css';
import { Component, Fragment } from 'react';

class Filter extends Component {
  searchHandler = e => {
    const value = e.target.value.toLowerCase().trim();
    this.props.findTarget(value);
  };

  render() {
    return (
      <Fragment>
        <input
          onChange={this.searchHandler}
          className={s.input}
          placeholder="Search contact"
        />
      </Fragment>
    );
  }
}

export default Filter;
