/**!
 * 
 * Omikuji
 * 
 * Coded by よね/Yone
 * Licensed under the CC0 1.0 Universal.
 * 
 * https://github.com/yone1130/omikuji
 * 
 */

import { Omikuji } from "./omikuji.js";

main();

/**
 * @returns {void}
 */
function main() {
    /**
     * @type {Omikuji}
     */
    const app = new Omikuji({
        root: document.getElementById("omikuji-fortune-area"),
    });

    app.start();
}
