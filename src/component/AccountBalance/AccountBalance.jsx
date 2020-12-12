import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'styled-components'
import styled from 'styled-components';

const Section = styled.section `
font-size: 2rem;
text-align: left;
padding: 1.5rem 0 1.5rem 5rem;
`;        
export default class AccountBalance extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                <Section>
                    Balance ${this.props.amount}                
                </Section>
                </div>
            </React.Fragment>
        );
    }
}

AccountBalance.propTypes = {
    amount : PropTypes.number
}
