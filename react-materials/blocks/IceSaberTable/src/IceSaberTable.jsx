import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IceSaberTable extends Component {
  static displayName = 'IceSaberTable';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        ice-saber-table
      </div>
    );
  }
}

const styles = {

}
