const cron = require('node-cron')

    var events=[
        {
            "text": "Reactjs",
            "dateTime": "2022-03-17 21:24:00.000"

        },
        {
            "text": "Nodejs",
            "dateTime": "2022-03-17 21:25:00.000"

        },
        {
            "text": "Express",
            "dateTime": "2022-03-17 21:25:20.000"

        },
        {
            "text": "Mongodb",
            "dateTime": "2022-03-17 21:25:40.000"

        },
        {
            "text": "Mysql",
            "dateTime": "2020-07-10 21:26:00.000"

        },
        {
            "text": "Redux",
            "dateTime": "2020-07-10 21:26:20.000"

        },
        {
            "text": "Loopback",
            "dateTime": "2020-07-10 21:26:40.000"

        },
        {
            "text": "Docker",
            "dateTime": "2022-03-17 21:26:50.000"

        },
        {
            "text": "AWS",
            "dateTime": "2022-03-17 21:27:00.000"

        },
        {
            "text": "Javascript",
            "dateTime": "2022-03-17 21:30:00.000"

        }
    ]

    events.map((date)=>{
        var eventData = date.dateTime;
            cron.schedule("*/1 * * * * *",()=>{

                var revData = date.text.split("").reverse().join("");
                var revLength = date.text.length
                delays = new Date(eventData).getTime()+revLength*1000;
                currentdelay = new Date(eventData).getTime();
                time = new Date(currentdelay).toLocaleString();
                delayTime = new Date(delays).toLocaleString();
                current = new Date().toLocaleString();

                if(time == current){
                    console.log('Sheduler started for',(date.text));
                }

                if(current == delayTime){
                    console.log(revData);
                }

            })
    })



