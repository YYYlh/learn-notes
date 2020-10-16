let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth() + 1
let currentDate = new Date().getDate()

// 获取每年每个月的天数
function getMonthDate(year,month) {
    return new Date(year, month, 0).getDate()
}
// 获取每月一号的是周几
function getFirstDay(year, month) {
    return new Date(year, month - 1, 1).getDay()
}

function isToday(year, month, date) {
    return year === currentYear && month === currentMonth && date === currentDate
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
                today: isToday(tempYear, tempMonth, preDate)
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
            today: isToday(year, month, i)
        })
        if ((i + day) % 7 === 0) {
            temp = i
            calendar.push([...item]) 
            item.length = 0
        }
    }
    let nextDate = 1
    if (item.length !== 0) {
        for (let i = 0; i < 7; i++) {
            if (temp < date) {
                temp++
            } else {
                let nextYear, nextMonth
                if (month === 12) {
                    nextYear = year + 1
                    nextMonth = 1
                } else {
                    nextYear = year
                    nextMonth = month + 1
                }
                item.push({
                    year: nextYear,
                    month: nextMonth,
                    date: nextDate,
                    today: isToday(nextYear, nextMonth, nextDate)
                })
                nextDate++
            }
        }
        calendar.push(item)
    }
    return calendar
}
console.log(getCalendar(2020, 10))
// export default getCalendar
