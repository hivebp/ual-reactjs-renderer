import { render } from 'enzyme'
import React from 'react'
import { UALError, UALErrorType } from 'universal-authenticator-library'
import { UALErrorMessage } from './UALErrorMessage'

describe('UALErrorMessage', () => {
  const errorA = new UALError(
    'This is a message',
    UALErrorType.Initialization,
    null,
    'UAL',
  )
  const errorB = new UALError(
    'This is another message',
    UALErrorType.Initialization,
    null,
    'UAL',
  )
  const wrapperA = render(<UALErrorMessage error={errorA} />)
  const wrapperB = render(<UALErrorMessage error={errorB} />)

  it('displays the error message', () => {
    expect(wrapperA.text().trim()).toEqual(
      'Information Circle This is a message',
    )
    expect(wrapperB.text().trim()).toEqual(
      'Information Circle This is another message',
    )
  })
})
