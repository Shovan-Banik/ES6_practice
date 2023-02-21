let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",/* aita find krte hbe */
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"/* aita find krte hbe */

            },
            id: 2
        }
    ]
}
console.log(activities.activity1[0]['song_list'].song_1);
console.log(activities.activity1[1].song_list.song_2);