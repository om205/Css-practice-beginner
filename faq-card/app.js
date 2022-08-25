let faqs = document.querySelector('ul')

function closeAll() {
    Array.from(faqs.children).forEach( li => {
        let details = li.firstElementChild
        let summary = details.firstElementChild
        details.removeAttribute('open')
        summary.style.fontWeight = 'normal'
    })
}

faqs.addEventListener('click', (e) => {
    if(e.target.tagName=='SUMMARY') {
        let flag = false;
        if(e.target.parentNode.open == true) flag = true
        closeAll()
        if(flag) e.preventDefault()
        else e.target.style.fontWeight = 'bolder';
    }
})