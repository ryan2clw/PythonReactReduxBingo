import React from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import Square from './Square';
import BingoBalls from './images/BingoButton.png';
import BingoButton from './images/BingoButton.png';

// Create a Title component that'll render an <h1> tag with some styles
const BingoHeader = styled.div`
	width: 132%;
	margin-left: -15%;
	margin-top: -13%;
`
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
    padding: 1rem;
    background: #d6d2cb center url("WoodBack.png");
    height: 300px;
    border-radius: 15px;
    width: 249px;
`;
const Button = styled.div`
    cursor: pointer;
    height:50%;
`

class BingoBoard extends React.Component {
    
    bingo = () => {
        alert("BINGO PRESSED!");
    }

    squares = (rowNumber = "0", columnCount, rowJSON) => {
        let numBas = Object.values(rowJSON);
        const calledBalls = this.props.calledBalls;
        return (
            <Flex justify='center' key={"Row(" + rowNumber + ")"} className="aqua">
                {[...Array(columnCount)].map((_, i) => {
                    let reactKey = "Square(" + rowNumber + "," + i + ")";
                    let ticketNumber = numBas[i].toString();
                    // console.log("CALLED BALLS", this.props);
                    if (reactKey === "Square(2,2)") {
                        ticketNumber = "FREE";
                        return (<Square className="ticket-number called" ticketNumber={ticketNumber} key={reactKey} />);
                    }
                    if (calledBalls && calledBalls.length && calledBalls.includes(ticketNumber)) {
                        //console.log("CALLED NUMBER", this.props);
                        return (<Square ticketNumber={ticketNumber} key={reactKey} className="ticket-number called" />)
                    }
                    return (<Square ticketNumber={ticketNumber} key={reactKey} className="ticket-number" />)
                })}
            </Flex>);
    };

    rows = (gameJSON, rowCount = 5, columnCount = 5) => [...Array(rowCount)].map((_, i) => this.squares(i.toString(), columnCount, gameJSON[i]))

    render() {
        const games = this.props.games;
        return games && games.rows ?
            (
                <Wrapper className="align-content-center mx-3 mb-5">
                    <BingoHeader>
                        <img src={ BingoBalls } alt="Ball Columns" width="100%" />
                    </BingoHeader>
                    {this.rows(games.rows, 5, 5) /* Configurable, can send row and column lengths */}
                    <Button className="d-flex flex-column justify-content-flex-start mt-1" onClick={this.bingo}>
                        <img src={ BingoButton } alt="Bingo!" className="h-50" />
                    </Button>
                </Wrapper>)
            : (
                <h3>N/A</h3>
            );
    }
}
export default BingoBoard;