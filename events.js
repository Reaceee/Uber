document.addEventListener("DOMContentLoaded", () => {
    let triggeredLink = false

    document.body.addEventListener('mousemove', () => {
        if (triggeredLink === false) {
            if (document.querySelectorAll('.compLink').length > 2) {
                triggeredLink = true
                // console.log('Mapped Successfully')

                document.querySelectorAll('.compLink').forEach(link => {
                    link.addEventListener('click', () => {
                        document.querySelector('.underline').style.left = link.id + 'px'
                    })
                }
                )

            }

        }
    })
})

setInterval(() => {
    // console.log(window.scrollY)
    if (window.scrollY < 300) {
        document.querySelector('.scrollBtn').style.bottom = '-2.5rem'
    }
    else {
        document.querySelector('.scrollBtn').style.display = 'flex'
        document.querySelector('.scrollBtn').style.bottom = '2.5rem'



    }
}, 300)