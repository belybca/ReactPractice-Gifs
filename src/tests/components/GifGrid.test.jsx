import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

//MOCK DEL CUSTOM HOOK
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas en GridItem', () => { 
    const category = 'the whitcher';

    test('debe mostrar el loading', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     });

     test('Debe mostrar items cuando se cargan las imagenes', () => { 
        
        const gifs = [{
            id:"656565",
            title:"puppy",
            url:"http://www.google.com"
            },
            {
                id:"id2",
                title:"Mika",
                url:"http://www.yahoo.com"
            },];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

      });
 }) ;