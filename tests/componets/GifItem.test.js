import { render, screen } from "@testing-library/react";
import GifItem from "../../src/componets/GifItem.jsx";

describe('GiftItemTest', () => {

    const url = 'http://...';
    const title = 'Title of the gif';

    test('Snapshot test', () => {
        const {container} = render(<GifItem img={ {url, title} }/>)
        expect(container).toMatchSnapshot();
    });

    test('Snapshot test', () => {

        render(<GifItem img={ {url, title} }/>)

        const {src, alt} = screen.getByRole('img');
        screen.debug();

        expect(src).toBe(url + "/");
        expect(alt).toBe(title);
    });


});