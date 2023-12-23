setInterval(function timeout1() {
    let currentDate = new Date();

    // - HH:MM::SS (Eg. 13:45:23)
    console.log(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);

    // - HH:MM::SS AM/PM (Eg 01:45:23 PM)
    let dayLight = currentDate.getHours() < 12 ? 'AM' : 'PM';
    console.log(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${dayLight}`);
}, 1000);
