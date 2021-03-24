import React from 'react';
import { render , screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SummaryForm from '../summary/SummaryForm';


test('checkbox is unchecked and button disabled by default', ()=>{
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i});
    const button = screen.getByRole('button', { name: /confirm order/i });
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
});



test('checking checkbox enables and disables button', ()=>{
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i});
    const button = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkbox);
    expect(button).toBeEnabled();
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
});

test('popover response to hover hide and show',async ()=>{
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(/No ice cream will actually be deliverd/i);
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
   
    const popover = screen.getByText(/no ice cream will actually be deliverd/i);
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(screen.queryAllByText(/no ice cream will actually be deliverd/i))
   

});