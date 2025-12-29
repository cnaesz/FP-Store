import { useEffect, useState } from "react"

const localValue = localStorage.getItem("count")

export default function useCounter(init) {
    const [count, setCount] = useState(+localValue ?? init)

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }


    return {
        count,
        increment,
        decrement
    }
}