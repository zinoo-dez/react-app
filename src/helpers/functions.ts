
export function timeToRead(content: string, wordsPerMinute: number = 200): string {
    if (!content) return '0 min read';
    const textContent = content.replace(/<[^>]+>/g, ' ');
    const wordCount = textContent.trim().split(/\s+/).length;
    
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    
    return minutes <= 1 ? '1 min read' : `${minutes} mins read`;
}


export function formatDate(date: Date | string, locale: string = 'en-US'): string {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    
    // Convert string to Date object if needed
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    return dateObj.toLocaleDateString(locale, options);
}

formatDate(new Date(), 'my'); // Example usage for Myanmar (Burmese)


// Optional: Add more formatting variants if needed
export const DateFormats = {
    short: (date: Date | string, locale: string = 'en-US'): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleDateString(locale, options);
    },
    withWeekday: (date: Date | string, locale: string = 'en-US'): string => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleDateString(locale, options);
    }
}; 
DateFormats.short(new Date(), 'my'); // Example usage
DateFormats.withWeekday(new Date(), 'my'); // Example usage for Myanmar (Burmese)