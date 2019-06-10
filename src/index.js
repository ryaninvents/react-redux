import Provider from './components/Provider'
import connectAdvanced from './components/connectAdvanced'
import { ReactReduxContext, createContextValue } from './components/Context'
import connect from './connect/connect'

import { useDispatch } from './hooks/useDispatch'
import { useSelector } from './hooks/useSelector'
import { useStore } from './hooks/useStore'
import createCustomHooks from './hooks/createCustomHooks'

import { setBatch } from './utils/batch'
import { unstable_batchedUpdates as batch } from './utils/reactBatchedUpdates'
import shallowEqual from './utils/shallowEqual'

setBatch(batch)

export {
  Provider,
  connectAdvanced,
  ReactReduxContext,
  createContextValue,
  createCustomHooks,
  connect,
  batch,
  useDispatch,
  useSelector,
  useStore,
  shallowEqual
}
