import { useEffect } from 'react'

function DataBg() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-bg]')

        elements.forEach((element) => {
            element.style.backgroundImage = `url(${element.getAttribute('data-bg')})`
        })
    }, [])
    return (<>

    </>
    )
}

export default DataBg;