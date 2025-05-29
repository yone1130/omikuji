/**
 * 
 * Omikuji
 * 
 * Coded by よね/Yone
 * 
 * Licensed under the CC0 1.0 Universal.
 * 
 */

import { Omikuji } from "./omikuji.mjs";

document.addEventListener("DOMContentLoaded", () => {
    new Omikuji({
        root: document.getElementById("fortuneArea"),
    }).start();
});
