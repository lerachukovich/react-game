// import React, {useState} from 'react';
// import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';
//
// const Rules = (props) => {
//     const [popoverOpen, setPopoverOpen] = useState(false);
//
//     const toggle = () => setPopoverOpen(!popoverOpen);
//
//     return (
//         <div>
//             <Button id="Popover1" type="button">
//                 Rules
//             </Button>
//             <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
//                 <PopoverHeader>Game Rules</PopoverHeader>
//                 <PopoverBody className='rules_text'>The object of Tic Tac Toe is to get three in a row. You play on a
//                     three by three game
//                     board. The first player is known as X and the second is O. Players alternate placing Xs and Os on
//                     the game board until either opponent has three in a row or all nine squares are filled. X always
//                     goes first, and in the event that no one has three in a row, the stalemate is called a cat
//                     game.</PopoverBody>
//             </Popover>
//         </div>
//     );
// }
//
// export default Rules;
