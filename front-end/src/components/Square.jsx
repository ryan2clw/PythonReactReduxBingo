import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'reflexbox';

const FlexHeight = styled(Flex)`
  height: ${props => props.height};
  background: ${props => props.background};
  min-width: 0;
  height: 42px;
  margin: 1px !important;
  padding: 4px;
  display: flex;
  width: 42px;
  justify-content: center;
  align-items: center;
`;

class Square extends React.Component {

  width = () => this.props.width || "42px";
  height = () => this.props.height || "42px";

  render() {
    const {className} = this.props; 
    return (
      <FlexHeight height={this.height()} w={this.width()} p={1} justify='center' align='center' className={ className }>
          {this.props.ticketNumber}
      </FlexHeight>
    );
  }
}
Square.propTypes = {
  ticketNumber: PropTypes.string,
  called: PropTypes.bool,
};
export default Square;