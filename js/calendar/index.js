let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth() + 1

// 获取每年每个月的天数
function getMonthDate(year,month) {
    return new Date(year, month, 0).getDate()
}
// 获取每月一号的是周几
function getFirstDay(year, month) {
    return new Date(year, month - 1, 1).getDay()
}

function getCalendar(year = currentYear, month = currentMonth) {
    let calendar = []
    let item = []
    const date = getMonthDate(year, month)
    const day = getFirstDay(year, month)
    if (day !== 0) {
        let preDate, tempYear, tempMonth
        if (month === 1) {
            tempYear = year - 1
            tempMonth = 12
        } else {
            tempYear = year
            tempMonth = month - 1
        }
        preDate = getMonthDate(tempYear, tempMonth)
        for (let i = 0; i < day; i++) {
            item.unshift({
                year: tempYear,
                month: tempMonth,
                date: preDate,
                today: (preDate === new Date().getDate() && tempYear === currentYear && tempMonth === currentMonth)
            })
            preDate--
        }
    }
    let temp = 0
    for (let i = 1; i <= date; i++) {
        item.push({
            year: year,
            month: month,
            date: i,
            today: (i === new Date().getDate() && year === currentYear && month === currentMonth)
        })
        if ((i + day) % 7 === 0) {
            temp = i
            calendar.push([...item]) 
            item.length = 0
        }
    }
    let nextDay = 1
    if (item.length !== 0) {
        for (let i = 0; i < 7; i++) {
            if (temp < date) {
                temp++
            } else {
                item.push({
                    year: month === 12 ? year + 1 : year,
                    month: month === 12 ? 1 : month + 1,
                    date: nextDay,
                    today: (nextDay === new Date().getDate() && year === currentYear && month === currentMonth)
                })
                nextDay++
            }
        }
        calendar.push(item)
    }
    return calendar
}
console.log(getCalendar(2020, 10))
// export default getCalendar
