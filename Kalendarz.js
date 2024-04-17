const today = new Date();

const currentMonth = 7;
const currentDay = today.getDate();
const currentYear = today.getFullYear();

const firstDayOfTheMonth = new Date(today.getFullYear(), currentMonth, 1).getDay();

function daysInMonth (year, month) {
    return new Date(year, month, 0).getDate();
}

function addDaysToCalendar()
{   
    for (let i = daysInMonth(currentYear, currentMonth) - firstDayOfTheMonth + 2; i < daysInMonth(currentYear, currentMonth) + 1; i++)
    {
        if (firstDayOfTheMonth != 1)
        {
            var ul = document.getElementById("days");
            var li = document.createElement("li");
            console.log(i.toString());
            var text = document.createTextNode(i.toString());    
            li.appendChild(text);
            ul.appendChild(li);

        }
    }
    console.log(firstDayOfTheMonth);
    for (let i = 1; i < daysInMonth(currentYear, currentMonth + 1) +1; i++)
    {
        var ul = document.getElementById("days");
        var li = document.createElement("li");
        console.log(i.toString());
        var text = document.createTextNode(i.toString());    
        li.appendChild(text);
        ul.appendChild(li);
    }
}