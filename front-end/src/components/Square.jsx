import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'reflexbox';
import './styles/Square.css';

const FlexHeight = styled(Flex)`
  height: ${props => props.height};
  background: ${props => props.background};
`;

class Square extends React.Component {

  width = () => this.props.width || "42px";
  height = () => this.props.height || "42px";

  render() {
    const {className} = this.props; 
    return (
      <FlexHeight height={this.height()} w={this.width()} p={1} justify='center' align='center' className={className }>
          {this.props.ticketNumber}
          {/* {console.log("SQUARE RENDERS")} */}
      </FlexHeight>
    );
  }
}
Square.propTypes = {
  ticketNumber: PropTypes.string,
  called: PropTypes.bool,
};
export default Square;