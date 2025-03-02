import { getGift } from "../../src/helpers/getGifs.js";

describe('getGifs() tests', () => {

    test('Should return a array of gifs', async () => {
        const gifs = await getGift('Hungry meme');
        expect(gifs.length).toBeGreaterThan(0);
    })
});