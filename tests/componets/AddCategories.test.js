import { fireEvent, render, screen } from "@testing-library/react";
import AddCategories from "../../src/componets/AddCategories.jsx";

describe('Testing <AddCategories/>', () => {

    const value = 'text modified 😎';

    test('should change the value of the input text', () => {
        render(<AddCategories/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: value}});

        expect(input.value).toBe(value);
        screen.debug();
    });

    test('Should call onNewValue if the input has any value', () => {

        const onNewCategory = jest.fn(); //Like @Mock

        render(<AddCategories onNewValue={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: value}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(value);

    });

    test("shouldn't call onNewCategory if the input is empty", () => {
        const onNewCategory = jest.fn();

        render(<AddCategories onNewValue={ onNewCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });


});
