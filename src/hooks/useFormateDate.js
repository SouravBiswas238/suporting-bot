
export const useFormateDate = (dateString) => {
    const currentDate = new Date();
    const date = new Date(dateString);

    const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInDays === 1) {
        return `Yesterday`;
    } else if (diffInDays <= 7) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()];
    } else {
        return date.toLocaleString([], { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
};


