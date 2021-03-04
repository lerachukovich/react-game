import React, {useState} from 'react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import Square from "./Square";

const Statistic = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    let renderStatistics =(num) => {
        if (localStorage.getItem('statistics')){
            let foo = JSON.parse(localStorage.getItem('statistics'));
            let res = [];
            foo.forEach( (elem,index) => {
                res.push(`Game: ${index + 1} Winner: ${elem[0]} Moves: ${elem[1]}`)
            })
            return (
                res[num]
            );
        }
    }


    return (
        <div>
            <Button id="Popover3" type="button">
                Statistic
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover3" toggle={toggle}>
                <PopoverHeader>Game Statistic</PopoverHeader>
                <PopoverBody className='rules_text'>
                    <a>{renderStatistics(0)}</a>
                    <a>{renderStatistics(1)}</a>
                    <a>{renderStatistics(2)}</a>
                    <a>{renderStatistics(3)}</a>
                    <a>{renderStatistics(4)}</a>
                    <a>{renderStatistics(5)}</a>
                    <a>{renderStatistics(6)}</a>
                    <a>{renderStatistics(7)}</a>
                    <a>{renderStatistics(8)}</a>
                    <a>{renderStatistics(9)}</a>
                    <a>{renderStatistics(10)}</a>

                </PopoverBody>
            </Popover>
        </div>
    );
}

export default Statistic;
