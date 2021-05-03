setInterval(() => {
    // STORING TIME IN A VARIABLE
    date = new Date();
    hneedle1 = date.getHours();
    mneedle1 = date.getMinutes();
    sneedle1 = date.getSeconds();
    var hneedle2 = date.getHours();
    var mneedle2 = date.getMinutes();
    var sneedle2 = date.getSeconds();
    millineedle = date.getMilliseconds();


    // SETTING AGLES ACCORDING TO NEEDLES
    hrotation = 30 * hneedle1 + mneedle1 / 2 + sneedle1 / 120;
    mrotation = 6 * mneedle1 + sneedle1 / 10;
    srotation = 6 * sneedle1 + (6 * millineedle) / 1000;

    // SELECTING NEEDLES BY ID
    hour = document.getElementById('hour');
    minute = document.getElementById('minute');
    second = document.getElementById('second');

    // GIVING NEEDLES ROTATION FUNCTIONALITY
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // SHOWS REAL TIME ON SCREEN
    show = document.getElementById('show');
    if (hneedle2 < 10) {
        hneedle2 = '0' + hneedle2;
    }
    if (mneedle2 < 10) {
        mneedle2 = '0' + mneedle2;
    }
    if (sneedle2 < 10) {
        sneedle2 = '0' + sneedle2;
    }
    show.innerHTML = `${hneedle2}:${mneedle2}:${sneedle2}`;


}, 10); //THIS IS THE INTERVAL AFTER WHICH THE FUNTION RUNS EVERTYTIME