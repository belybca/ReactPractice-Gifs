import { getAllByRole, render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components/GifGridItem";



describe('Prueabs en <GifGridItem />', () => { 
    
    const title = 'Test Title';
    const url = 'https://www.google.com/';
    
    // test ('debe hacer match con el snapshot', () =>{
    //     const { container } = render(<GifGridItem title={title} url={url}/>);

    //     expect(container).toMatchSnapshot();
    // });

    test('should show the image with the URL y el Alt indicado', () => { 
        render(<GifGridItem title={title} url={url}/>);
        //screen.debug();

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     })

     test('Mostrar titulo en el componente', () => { 
        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getAllByAltText(title)).toBeTruthy();
      })
});