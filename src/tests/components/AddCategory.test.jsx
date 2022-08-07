import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => { 
    
    test('Debe cambiar la caja de texto', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target:{value : 'sailor moon'}} );

        expect(input.value).toBe('sailor moon');
        //screen.debug();
     })

     test('Debe de llamar onNewCategory si el input tiene un valor y vaciar la caja de texto y que la funcion onNewCategory is called y se llama con el valor que mando el usuario', () => { 
        const inputValue = 'Superman';
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target:{value : inputValue}} );

        fireEvent.submit(form);
         expect(input.value).toBe('');        
         expect(onNewCategory).toHaveBeenCalled();
         expect(onNewCategory).toHaveBeenCalledWith( inputValue );
      });

      test('no debe llamar on new category si el input esta vacio', () => { 
            const inputValue = '';
            const onNewCategory = jest.fn();
            
            render(<AddCategory onNewCategory={ onNewCategory } />);
            
            const form = screen.getByRole('form');

            fireEvent.submit(form);
            expect(onNewCategory).toHaveBeenCalledTimes(0);
            expect(onNewCategory).not.toBeCalled();
    
       })
 })