import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Flex } from 'reflexbox';
//import { clear } from  '../store/Message';
import { Container, Row, Spinner } from 'reactstrap';
import { actionCreators } from '../store/Card';
import BingoBoard from './BingoBoard';
import './styles/App.css';

const Body = styled.div`
    min-height:600px;
`

const BackgroundFlex = styled(Flex)`
    background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(67, 198, 172), \
    rgb(25, 22, 84)) repeat scroll 0% 0%;
    min-height: 680px;
    color:white;
    padding-top:24px;
    flex-direction:column;
`

class BingoPage extends React.Component {

    getCards = (cardCount = 2) => this.props.dispatch(actionCreators.requestNumbers(cardCount));

    bingoBoards = (cardCount = 2) => {
        const { cards } = this.props;      
        return [...Array(cardCount)].map((_, i) => {
            return (<BingoBoard key={"Card-" + i.toString()} games={cards.cards[i] || []} />);
        });
    };

    componentDidMount(){
        this.getCards(this.props.cardCount || 6);
        // setTimeout(() => {
        //     this.props.dispatch(clear());
        //   }, 10000);
    }

    render(){
        const { alert, cards } = this.props;
        return (
        <BackgroundFlex column justify="center">
            {console.log(this.props)}
            <Container>
                <Row className="justify-content-center">
                    <div className="text-center">
                        {
                            alert.type &&
                            <div className={`alert ${alert.type}`}>
                                {alert.message}
                            </div>
                        }
                    </div>
                </Row>
            </Container>     
            {cards && cards.cards ? (
            <Container justify='space-evenly' className='pb-3' >
                <div className="row">
                    <div className="col-md-9">
                        <div className="row d-flex flex-row justify-content-center align-items-center">
                            {this.bingoBoards(cards.cards.length)}
                        </div>
                    </div>
                    <div className="col-md-3">Ball Board</div>
                </div>
            </Container>) :
            (<Container align='center' className='p-4' >
                <div className="row">
                    <Body className="col-md-12">
                        <Spinner />
                    </Body>
                </div>
            </Container>)}
        </BackgroundFlex>
        )
    }
}
function mapStateToProps(state) {
    const { alert, cards } = state;
    console.log("state", state);
    return {
        cards: cards,
        alert
    }
}
export default connect(mapStateToProps)(BingoPage);
