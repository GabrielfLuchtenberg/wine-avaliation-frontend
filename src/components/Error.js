import { useEffect } from 'react'

const Error = ({ message }) => {
    useEffect(() => {
        alert(message)
    }, [])
}

export default Error;