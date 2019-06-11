import { useReduxContext as useDefaultReduxContext } from './useReduxContext'

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [useReduxContext] Hook which returns the Redux context.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */
export function createStoreHook(useReduxContext = useDefaultReduxContext) {
  return function useStore() {
    const { store } = useReduxContext()
    return store
  }
}

/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */
export const useStore = createStoreHook()
