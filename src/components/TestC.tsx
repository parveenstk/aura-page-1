import { useEffect } from "react"

function TestC({a, b, c, abx}) {
    useEffect(() => {
        console.log('a', a)
        console.log('b', b)
        console.log('c', c)
        console.log('abx', abx)
        // return () => console.log('TestC cleanup')
    }, [])

    return (
        <div>TestC</div>
    )
}

export default TestC