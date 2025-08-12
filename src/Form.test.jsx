import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OperandContext } from './context/OperandContext';
import Form from './Form';

describe('Form', () => {
  it('disables the button when input is empty', async () => {
    const user = userEvent.setup();

    const mockCV = {
      operand: 0,
      setOperand: vi.fn(),
    };

    render(
      <OperandContext.Provider value={mockCV}>
        <Form />
      </OperandContext.Provider>
    );

    const input = screen.getByLabelText(/Calculate with:/i);
    const button = screen.getByRole('button', { name: /submit/i });

    await user.clear(input);

    expect(button).toBeDisabled();
  });
});
