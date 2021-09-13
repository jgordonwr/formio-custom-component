import * as React from 'react'
import { useEffect, useState } from 'react'

export const TestReactComponent = ({ id, setValue, value, property }) => {
    // const [data, setData] = useState()
    // const [value, setValue] = useState(initialValue)
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(r => r.json()).then((d) => {
    //         setData(d)
    //         setValue(`Data fetched asynchronously in react component: ${JSON.stringify(data)}`)
    //     })
    // }, [])
    console.log({ value })
    return <input
        id={`${id}-${property}`}
        name={`data[${property}]`}
        value={value}
        onChange={e => setValue(e.target.value)}
    />
}