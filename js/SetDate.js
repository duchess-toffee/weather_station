`strict mode`
class SetDate{
    constructor(date){
        this.date = date;
        
        this.updateDay();
        setInterval(() => this.updateDay(), 1000 * 60);
    }
    
    updateDay(){
        const date = new Date();
        const options = {
            weekday: `short`,
            month: `short`,
            day: `2-digit`
        }

        const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);
        this.date.textContent = `${dateFormat}`;
    }
}