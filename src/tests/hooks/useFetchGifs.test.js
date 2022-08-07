import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Test sobre useFetchGifs', () => { 
    test('debe de regresar stado inicial', () => { 
      const { result }  = renderHook(() => useFetchGifs("sailor moon"));
      const {images, isLoading} = result.current;

      //expect(images.lengh).toBe(0);
      expect(isLoading).toBeTruthy();
     });

     test('debe de retornar un arreglo de imagenes and isLoading is false', async() => { 
        const { result }  = renderHook(() => useFetchGifs("sailor moon"));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 3000}
        );
        const {images, isLoading} = result.current;

        //expect(images.lengh).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
       });


 });