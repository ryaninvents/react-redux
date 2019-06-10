import React from 'react'
import Subscription from '../utils/Subscription'

/**
 * Create a React Redux context from a store.
 *
 * @param {Store} store Redux store.
 * @returns {{store: Store, subscription: Subscription}} React Redux context object
 */
export function createContextValue(store) {
  const subscription = new Subscription(store)
  subscription.onStateChange = () => subscription.notifyNestedSubs()
  return { store, subscription }
}

export const ReactReduxContext = React.createContext(null)

export default ReactReduxContext
