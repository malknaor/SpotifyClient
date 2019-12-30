export const debounce = function (func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
};

export const getSongDurationHMS = songDurationMS => {
    let hours, minutes, seconds;

    seconds = songDurationMS / 1000;
    hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    minutes = parseInt(seconds / 60);
    seconds = seconds % 60;

    console.log(`${hours}:${minutes}:${seconds}`);
    
    return hours? (`${hours}:${minutes}:${seconds}`) : (`${minutes}:${seconds}`);
};

export const limitTitle = (title, limit = 17) => { 
    let newTitle = [];

    if (title.length > limit) {
        title.split(' ').reduce((acc, current) => {
            if ((acc + current.length) <= limit) {
                newTitle.push(current);
            }
            
            return acc + current.length;
        }, 0);
    } else {
        return title;
    }

    return `${newTitle.join(' ')}...`;
};