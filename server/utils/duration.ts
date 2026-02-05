export const calculateWorkHours = (checkIn: Date, checkOut: Date, breaks: any[]) => {
    let totalMs = checkOut.getTime() - checkIn.getTime();

    // Subtract each break duration
    breaks.forEach(b => {
        if (b.start && b.end) {
            totalMs -= (new Date(b.end).getTime() - new Date(b.start).getTime());
        }
    });

    return (totalMs / (1000 * 60 * 60)).toFixed(2); // Returns hours as string (e.g., "7.50")
};