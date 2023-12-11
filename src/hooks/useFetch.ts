import { useEffect, useReducer, useRef } from 'react'

export const httpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
} as const

type State<T> = {
  data?: T
  error?: Error
  loading: boolean
}

type Cache<T> = { [url: string]: T }

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

type SearchParams = {
  [key: string]: string
}

export const useFetch = <T = unknown>(
  path?: string,
  fetchParameters: {
    method?: string
    immediate?: boolean
    searchParams?: SearchParams
    skip?: boolean
    onCompleted?: () => void
    onError?: () => void
  } = {
    method: httpMethods.GET,
    immediate: true,
    skip: false,
  },
): { state: State<T>; action: () => void } => {
  const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN

  const { method, immediate, searchParams, skip, onCompleted, onError } =
    fetchParameters

  let url = `${path}`

  if (searchParams) {
    const searchParamsObject = new URLSearchParams(searchParams)
    const paramPairs = []

    for (const [key, value] of searchParamsObject) {
      const decodedKey = decodeURIComponent(key)
      const decodedValue = decodeURIComponent(value)
      paramPairs.push(`${decodedKey}=${decodedValue}`)
    }

    const decodedQueryString = paramPairs.join('&')
    url += `?${decodedQueryString}`
  }

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authid: `${accessToken}`,
    },
  }

  const cache = useRef<Cache<T>>({})

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false)

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: true }
      case 'fetched':
        return { ...initialState, data: action.payload, loading: false }
      case 'error':
        return { ...initialState, error: action.payload, loading: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  const fetchData = async () => {
    dispatch({ type: 'loading' })

    if (cache.current[url]) {
      dispatch({ type: 'fetched', payload: cache.current[url] })
      return
    }

    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const apiResponse = (await response.json()) as T
      cache.current[url] = apiResponse
      if (cancelRequest.current) return

      dispatch({ type: 'fetched', payload: apiResponse })

      if (onCompleted) onCompleted()
    } catch (error) {
      if (cancelRequest.current) return

      dispatch({ type: 'error', payload: error as Error })

      if (onError) onError()
    }
  }

  const execute = () => {
    void fetchData()
  }

  useEffect(() => {
    if (!url) return

    cancelRequest.current = false

    if (immediate && !skip) execute()

    return () => {
      cancelRequest.current = true
    }
  }, [url])

  if (skip) {
    return {
      state: { error: undefined, data: undefined, loading: false },
      action: () => {},
    }
  }

  return { state, action: execute }
}
