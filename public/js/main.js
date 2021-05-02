const update = document.querySelector('#update-button')


update.addEventListener('click', _ => {
    fetch('/', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                main_groups: document.getElementsByName("main_groups")[0].value,
                item: document.getElementsByName("item")[0].value,
                price: document.getElementsByName("price")[0].value,

        })
    })
})
const deleteB = document.querySelector('#delete')
deleteB.addEventListener('click', _ => {
    fetch('/', {
        method: 'delete',

    })
})