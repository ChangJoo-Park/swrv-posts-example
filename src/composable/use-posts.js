import useSWRV from "swrv"
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'

const fetcher = key => fetch(key).then(resp => resp && resp.json())

export default function () {
  const endpoint = `https://jsonplaceholder.typicode.com/posts`
  const { data, error } = useSWRV(endpoint, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
    cache: new LocalStorageCache(endpoint),
  })

  return { data, error }
}
