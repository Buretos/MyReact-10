import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
  render() {
    const { information } = this.props;

    return <div>{information}</div>;
  }
}

InformationLayout.propTypes = {
  information: PropTypes.string,
};

