import React from 'react';
import { Circle } from './Circle';

const ACTIVE_USER = 'RED'

export class Board extends React.Component {
    render() {
        return (
            <div>
                Board
                <Circle user={ACTIVE_USER} />
            </div>
        );
    };
}