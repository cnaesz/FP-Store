import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
            .catch((err) => {
                setIsError(true)
                setError(err)
            })
            .finally(() => setIsLoading(false))
    }, [])

    return {
        data,
        isLoading,
        isError,
        error
    }
}