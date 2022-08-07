import { getGif } from '../../helpers/getGifs'

describe('pruebas en gifs', () => { 
    test('debe retornar el arreglo de gifs', async () => { 
        const gifs = await getGif('sailor moon');
        //jest.setTimeout(15000);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
     })
 })
;

