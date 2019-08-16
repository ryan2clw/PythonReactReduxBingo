import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Flex } from 'reflexbox';
import { danger, clear } from  '../store/Message';
import { Container, Row } from 'reactstrap';


const BackgroundFlex = styled(Flex)`
    background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(67, 198, 172), \
    rgb(25, 22, 84)) repeat scroll 0% 0%;
    min-height: 680px;
    color:white;
    padding-top:24px;
`


class BingoPage extends React.Component {

    componentDidMount(){
        this.props.dispatch(danger("Your API call failed because you never made one"));
        setTimeout(() => {
            this.props.dispatch(clear());
          }, 10000);
    }

    render(){
        const { alert } = this.props;
        return (
        <BackgroundFlex justify="center">
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
        </BackgroundFlex>
        )
    }
}
function mapStateToProps(state) {
    const { alert } = state;
    return {
        ...state,
        alert
    }
}
export default connect(mapStateToProps)(BingoPage);
