import SummaryPage from '../SummaryPage';
import { render,screen } from "@testing-library/react";


test('checkbox and button',()=>{ // Which test?
   render(<SummaryPage />)
   const checkbox = screen.getByRole('checkbox',{
       name:'주문 확인2'
   });
   expect(checkbox.checked).toEqual(false);

   const confirmButton = screen.getByRole('button',{
       name:'주문 확인'
   });
   expect(confirmButton.disabled).toBeTruthy();
})