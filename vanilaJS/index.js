const headings = [
    'Язык',
    'Платформы',
    'Зарплаты',
    'Простота изучения',
    'Популярность',
]

const rows = [
    [
        'Python',
        'Android, iOS, Windows, Mac',
        '260K',
        '10/10',
        '16.1%'
    ],
    [
        'Java',
        'Android, iOS, Windows',
        '280K',
        '5/10',
        '9.4%'
    ],
    [
        'JS',
        'Android, iOS, Windows, Mac',
        '275K',
        '9/10',
        '15.8%'
    ],
    [
        'Swift',
        'iOS',
        '300K',
        '3/10',
        '2.5%'
    ]
]

// Обновление таблицы
function updateTable(rows) {
    const body = document.querySelector('.table-body')

    rows.forEach((row) => {
        const rowElement = document.createElement('div')
        rowElement.className = 'row'
        row.forEach((column, idx) => {
            const columnElement = document.createElement('div')
            columnElement.className = 'column'

            const mobileElement = document.createElement('div')
            mobileElement.className = 'mobile-column'
            const mobileHeading = document.createElement('div')
            mobileHeading.className = 'mobile-heading'
            mobileHeading.textContent = headings[idx]
            const mobileText = document.createElement('div')
            mobileText.className = 'mobile-heading'
            mobileText.textContent = column
            mobileElement.appendChild(mobileHeading)
            mobileElement.appendChild(mobileText)

            const desktopElement = document.createElement('div')
            desktopElement.className = 'desktop-column'
            desktopElement.textContent = column

            columnElement.appendChild(mobileElement)
            columnElement.appendChild(desktopElement)
            rowElement.appendChild(columnElement)
        })
        body.appendChild(rowElement)
    })
}

updateTable(rows)


// ПОИСК
const button = document.querySelector('.search-button')
button.addEventListener('click', () => {
    const searchInputElement = document.querySelector('.search-input')
    searchByText(rows, searchInputElement.value)
})

function searchByText(rows, str) {
    let counter = 0;
    const body = document.querySelector('.table-body')

    rows.forEach((row, rowIdx) => {
        row.forEach((column, columnIdx) => {
            if (column.toLowerCase().includes(str.toLowerCase())) {
                body.childNodes[rowIdx].childNodes[columnIdx].className = 'column column-active'
                counter++
            } else {
                body.childNodes[rowIdx].childNodes[columnIdx].className = 'column'
            }
        })
    })

    const counterElement = document.querySelector('.counter')

    if (counter === 0) {
        counterElement.textContent = 'Ничего не найдено'
    } else {
        counterElement.textContent = `${counter}`
    }
}
