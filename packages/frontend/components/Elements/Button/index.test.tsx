import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button, { ARIA_LABEL } from '.'

const onClickMock = jest.fn()
const children = 'Test'

describe('Button', () => {
  beforeEach(() => {
    render(<Button onClick={onClickMock}>{children}</Button>)
  })

  test('描画される', () => {
    const buttonElement = screen.getByLabelText(ARIA_LABEL)
    expect(buttonElement).toBeInTheDocument()
  })

  test('children が描画される', () => {
    const childrenElement = screen.getByText('Test')
    expect(childrenElement).toBeInTheDocument()
  })

  test('クリック時に onClick が呼ばれる', () => {
    const buttonElement = screen.getByLabelText(ARIA_LABEL)
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalled()
  })
})
