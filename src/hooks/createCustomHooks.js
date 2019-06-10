import { useSelectorWithStoreAndSubscription } from './useSelector'

/**
 *
 * @param {Function} useReduxContext Hook which returns a Redux context.
 * @returns {{useStore: Function, useDispatch: Function, useSelector: Function, useReduxContext: Function}}
 *    Set of hooks which will work with the store attached to the given Redux context.
 */
export default function createCustomHooks(useReduxContext) {
  const useStore = () => useReduxContext().store
  const useDispatch = () => useStore().dispatch
  const useSelector = (selector, equalityFn) => {
    const { store, subscription } = useReduxContext()

    return useSelectorWithStoreAndSubscription(
      selector,
      equalityFn,
      store,
      subscription
    )
  }
  return { useStore, useDispatch, useSelector, useReduxContext }
}
