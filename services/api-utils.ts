import { axiosClient } from './axios-client'

type ApiEnvelope<T> =
  | T
  | {
      data?: ApiEnvelope<T>
      items?: T
      results?: T
    }

export function unwrapApiData<T>(payload: ApiEnvelope<T>): T {
  if (Array.isArray(payload)) {
    return payload as T
  }

  if (payload && typeof payload === 'object') {
    if ('data' in payload && payload.data !== undefined) {
      return unwrapApiData(payload.data as ApiEnvelope<T>)
    }

    if ('items' in payload && payload.items !== undefined) {
      return payload.items as T
    }

    if ('results' in payload && payload.results !== undefined) {
      return payload.results as T
    }
  }

  return payload as T
}

export async function fetchApiData<T>(path: string): Promise<T> {
  const response = await axiosClient.get(path)
  return unwrapApiData<T>(response.data as ApiEnvelope<T>)
}
