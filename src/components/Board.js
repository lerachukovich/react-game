import React from 'react';
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            moves: 0,
            soundOn: false,
            musicOn: false,
        }
        this.music = new Audio('https://www.bensound.com/bensound-music/bensound-erf.mp3');
    }

    renderSquare(num) {
        return (
            <Square
                value={this.state.squares[num]}
                onClick={() => this.handleClick(num)}
            />
        );
    }

    addHotKeys() {
        document.addEventListener('keypress', (e) => {
            if(e.key === 'q') {
                document.querySelector( "div.board > div:nth-child(2) > button:nth-child(1)").click()
            } else if (e.key === 'w') {
                document.querySelector( "div.board > div:nth-child(2) > button:nth-child(2)").click()
            } else if (e.key === 'e') {
                document.querySelector( "div.board > div:nth-child(2) > button:nth-child(3)").click()
            } else if (e.key === 'a') {
                document.querySelector( "div.board > div:nth-child(3) > button:nth-child(1)").click()
            } else if (e.key === 's') {
                document.querySelector( "div.board > div:nth-child(3) > button:nth-child(2)").click()
            } else if (e.key === 'd') {
                document.querySelector( "div.board > div:nth-child(3) > button:nth-child(3)").click()
            } else if (e.key === 'z') {
                document.querySelector( "div.board > div:nth-child(4) > button:nth-child(1)").click()
            } else if (e.key === 'x') {
                document.querySelector( "div.board > div:nth-child(4) > button:nth-child(2)").click()
            } else if (e.key === 'c') {
                document.querySelector( "div.board > div:nth-child(4) > button:nth-child(3)").click()
            }
        });
    }

    startNewGame() {
        return (
            <button className="btn btn-warning start_btn" onClick={() => {
                this.setState({
                    squares: Array(9).fill(null),
                    xIsNext: true,
                    moves: 0,
                    soundOn: false,
                    musicOn: false,
                })
            }}>Start New Game</button>
        )
    }

    playSound() {
        const sound = new Audio(`https://freesound.org/data/previews/2/2171_1517-lq.mp3`);
        if (this.state.soundOn) {
            return sound.play();
        } else {
            sound.pause();
        }
    }

    playMusic() {
        this.setState({
            musicOn: true
        })
        return this.music.play();
    }

    muteSound() {
        return (
            <div>
                <button className='btn btn-info' onClick={() => {
                    this.setState({
                        soundOn: !this.state.soundOn,
                    })
                }}>{this.state.soundOn ? 'Sound Off' : 'Sound On'}</button>
            </div>
        )
    }

    muteMusic() {
        return (
            <div>
                <button className='btn btn-info' onClick={() => {
                    this.setState({
                        musicOn: !this.state.musicOn,
                    })
                    return this.music.pause();
                }}>Pause Music
                </button>
            </div>
        )
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            moves: this.state.moves + 1,
            musicOn: !this.state.musicOn,
        });
    }


    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner === 'CAT') {
            status = <div className="alert alert-dismissible alert-info">
                <h2 className='alert_msg'>Try another one, it's {winner}</h2>
            </div>
        } else if (winner) {
            status = <div className="alert alert-dismissible alert-info">
                <h2 className='alert_msg'> Well done, {winner}, you won in {this.state.moves} moves!</h2>
            </div>
        } else {
            status =
                <h1>Next player:
                    <span className="badge badge-pill badge-warning">{(this.state.xIsNext ? 'X' : '0')}</span>
                </h1>
        }


        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row" onClick={() => this.playSound()}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row" onClick={() => this.playSound()}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row" onClick={() => this.playSound()}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div>{this.startNewGame()}</div>
                <h2 className='moves'>Moves: <span className='moves_num text-warning'>{this.state.moves}</span></h2>
                <div className='game_music'>
                    <div>{this.muteSound()}</div>
                    <button className='btn btn-info' onClick={() => this.playMusic()}>Play Music</button>
                    <div>{this.muteMusic()}</div>
                </div>
                {this.addHotKeys()}
            </div>
        );
    };

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            } else if (!squares.includes(null)) {
                return 'CAT'
            }
        }
        return null;
    }
}

export default Board;
