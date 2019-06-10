import React from 'react'
import { createStore } from 'redux'
import { renderHook } from 'react-hooks-testing-library'
import {
  Provider as ProviderMock,
  useDispatch,
  createContextValue,
  createCustomHooks
} from '../../src/index.js'

const store = createStore(c => c + 1)

describe('React', () => {
  describe('hooks', () => {
    describe('useDispatch', () => {
      it("returns the store's dispatch function", () => {
        const { result } = renderHook(() => useDispatch(), {
          wrapper: props => <ProviderMock {...props} store={store} />
        })

        expect(result.current).toBe(store.dispatch)
      })
      it('correctly uses a custom context', () => {
        const store2 = createStore(c => c + 2)
        const customContext = React.createContext(createContextValue(store2))
        const customHooks = createCustomHooks(() =>
          React.useContext(customContext)
        )
        const { result } = renderHook(() => customHooks.useDispatch(), {
          wrapper: props => <ProviderMock {...props} store={store} />
        })

        expect(result.current).toBe(store2.dispatch)
      })
    })
  })
})
