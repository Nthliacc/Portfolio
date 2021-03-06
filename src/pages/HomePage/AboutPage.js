import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 22px;
    p{
        font-size: 12px;
    }
    button{
        align-self: center;
        border-radius: 18px;
        width: 160px;
        background: #82d0d9;
    }
`;
export const Tech = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 90px);
    width: 90%;
    margin-top: 16px;
    p{  
        font-size: 14px;
        padding: 5px;
        margin: 0 15px 15px 0;
        border-left: 4px solid #FFFFFF;
        border-radius: 5px;
    }
`;

export const AboutPage = () => {
    return (
        <AboutContainer>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. 
            </p>
            <Tech>
                <p>Git</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>AWS</p>
                <p>React</p>
                <p>Hooks</p>
                <p>MySQL</p>
                <p>NodeJS</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
            </Tech>
            <Button variant="contained">CV em PDF</Button>
        </AboutContainer>
    );
};