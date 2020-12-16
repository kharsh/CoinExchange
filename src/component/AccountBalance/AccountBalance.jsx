import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'styled-components'
import styled from 'styled-components';

const Section = styled.section `
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;
const SecButton = styled.button `
    padding: 1.5rem 0 1.5rem 5rem;
    text-align: center;
    min-width: 10vh;
    min-height: 2.5vh
`;

export default class AccountBalance extends Component {

    render() {
        const balanceText = this.props.showBalance ? 'HideBalance' : 'ShowBalance';
        let content = null;
        if(this.props.showBalance) {
            content = <>Balance ${this.props.amount}</>
        }
        return (
            <React.Fragment>
                <div>
                <Section hidden={!this.props.showBalance}>
                    {content}    
                         
                </Section>
                <SecButton onClick = {this.props.handleBalanceDisplay}>{balanceText}</SecButton> 
                
                
                </div>
            </React.Fragment>
        );
    }
}

AccountBalance.propTypes = {
    amount : PropTypes.number.isRequired,
    showBalance : PropTypes.bool.isRequired
}

