const { render, screen, fireEvent } = require("@testing-library/react")
import { GifExpertApp } from '../GifExpertApp'

describe('Test en <GifExpertApp />', () => { 
    test('Debe contener el titulo', () => { 
        render(<GifExpertApp />);
        screen.debug();

        expect( screen.getByText("Gif Expert App")).toBeTruthy();
     });

     test('La caja de texto debe mostrar la categoria que se escribe', () => { 
        const {container }= render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target:{value:'naruto'}});
        expect(input.value).toBe('naruto');
        expect(container.getElementsByClassName("card-grid")).toHaveLength(3);

     });

     test('Debe de llamar onNewCategory si el input tiene un valor y vaciar la caja de texto y que la funcion onNewCategory is called y se llama con el valor que mando el usuario', () => { 
        const inputValue = 'Superman';
        
        const {container} = render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target:{value : inputValue}} );

        fireEvent.submit(form);
         expect(input.value).toBe('');        
         expect(container.getElementsByClassName("card-grid")).toHaveLength(4);
      });

      test('Si la categoria ya se encuentra no pasa nada', () => { 
        const inputValue = 'Caballeros del zodiaco';
        
        const {container} = render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target:{value : inputValue}} );

        fireEvent.submit(form);
         expect(input.value).toBe('');        
         expect(container.getElementsByClassName("card-grid")).toHaveLength(3);
      });
 })