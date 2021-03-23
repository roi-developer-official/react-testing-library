
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
export default function SummaryForm(){

    const [tChecked, setTchecked] = useState(false);

    const popover = (
        <Popover id="popover-basic">
        <Popover.Content>
        No ice cream will actually be deliverd
        </Popover.Content>
        </Popover>
    );


    const checkboxLabel = (
        <span>
            I agree to 
            <OverlayTrigger placement="right" overlay={popover}>
            <span style={{color: 'blue'}}>Terms and conditions</span>
            </OverlayTrigger>
        </span>
    );
    

    return <div>
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tChecked}
                    onChange={(e)=>setTchecked(e.target.checked)}
                    label={checkboxLabel}>  
                    </Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tChecked}>
                Confirm order
            </Button>
        </Form>
    </div>
}
