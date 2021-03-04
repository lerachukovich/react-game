import React, {useState} from 'react';
import {Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const HotKeys = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <Button id="Popover2" type="button">
                Hot Keys
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover2" toggle={toggle}>
                <PopoverHeader>How Can You Use Hot Keys</PopoverHeader>
                <PopoverBody className='rules_text'>There are 9 hot keys. They're representing you game board.
                    <div className='hotkey_instruction'>
                        <button>Q</button>
                        <button>W</button>
                        <button>E</button>
                    </div>
                    <div className='hotkey_instruction'>
                        <button>A</button>
                        <button>S</button>
                        <button>D</button>
                    </div>
                    <div className='hotkey_instruction'>
                        <button>Z</button>
                        <button>X</button>
                        <button>C</button>
                    </div>
                    All you need is only press those keys on your key board.
                </PopoverBody>
            </Popover>
        </div>
    );
}

export default HotKeys;
