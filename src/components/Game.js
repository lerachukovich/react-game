import React from 'react';
import '../App.css';
import Board from "./Board";
import Rules from "./Rules";

class Game extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="game">
                    <h1 className="title">Tic Tac Toe</h1>
                    <div className="game-board">
                        <Board />
                    </div>
                </div>
                <div className="rules">
                    <Rules />
                </div>
            </div>

        )
    };
}

export default Game;