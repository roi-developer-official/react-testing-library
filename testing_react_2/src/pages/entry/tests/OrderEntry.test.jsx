import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import {server} from '../../../mocks/server';


test.only("handle errors from scoops and topping routes", async () => {
    server.resetHandlers([
        rest.get('http://localhost:3030/scoops', (req,res,ctx)=>{
            res(ctx.status(500))
        }),
        rest.get('http://localhost:3030/toppings', (req,res,ctx)=>{
            res(ctx.status(500))
        })
    ]);

    render(<OrderEntry />);
    await waitFor(async ()=> {
            const alerts = await screen.findAllByRole('alert',
            // {  name :  /An unexpected error occured. Please try again later./i }
            );
        expect(alerts).toHaveLength(2);
    });

});

test('this test wont run',()=>{

})
