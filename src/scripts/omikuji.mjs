/**
 * 
 * Omikuji
 * 
 * Copyright (c) よね/Yone
 * 
 * Licensed under the MIT LICENSE.
 * 
 */

export class Omikuji {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => this.onLoaded());
    }


    get interval() {
        return (1000 / 30);
    }


    get fortunes() {
        return ([
            "大吉",
            "中吉",
            "小吉",
            "吉",
            "末吉",
            "凶"
        ])
    }


    get lengthOfFortunes() {
        return (this.fortunes.length);
    }


    onLoaded() {
        this.fortuneElement = document.getElementById("fortuneArea");
        setInterval(() => this.mainloop(), this.interval);
    }


    mainloop() {
        const randomInt = this.getRandomInt(this.lengthOfFortunes);
        const fortune = this.fortunes[randomInt];
        this.fortuneElement.innerText = fortune;
    }


    getRandomInt(maxValue) {
        return (Math.floor(Math.random() * maxValue));
    }
}
