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

export class Omikuji {
    /**
     * @param {{
     *     root: HTMLElement,
     *     interval?: number,
     *     fortunes?: string[],
     * }}
     */
    constructor({
        root,
        interval = Omikuji.DEFAULT_INTERVAL,
        fortunes = Omikuji.DEFAULT_FORTUNES,
    }) {
        if (!(root instanceof HTMLElement)) {
            throw new Error("Invalid root element.");
        }

        this.#root = root;
        this.#interval = interval;
        this.#fortunes = fortunes;
    }

    /**
     * @type {number}
     */
    static DEFAULT_INTERVAL = 1000 / 30;

    /**
     * @type {string[]}
     */
    static DEFAULT_FORTUNES = [
        "大吉",
        "中吉",
        "小吉",
        "吉",
        "末吉",
        "凶"
    ];

    /**
     * @type {HTMLElement | null}
     */
    #root = null;

    /**
     * @type {number | null}
     */
    #interval = null;

    /**
     * @type {string[] | null}
     */
    #fortunes = null;

    /**
     * @returns {HTMLElement}
     */
    get root() {
        return this.#root;
    }

    /**
     * @returns {number | null}
     */
    get interval() {
        return this.#interval;
    }

    /**
     * @param {number} value
     */
    set interval(value) {
        if (value < 1000 / 60) {
            throw new Error("Interval must be at least 1000 / 60 milliseconds.");
        }
        this.#interval = value;
    }

    /**
     * @returns {string[] | null}
     */
    get fortunes() {
        return this.#fortunes;
    }

    /**
     * @param {string[]} value
     */
    set fortunes(value) {
        if (!Array.isArray(value) || value.length === 0) {
            throw new Error("Fortunes must be a non-empty array.");
        }
        this.#fortunes = value;
    }

    /**
     * @returns {number}
     */
    get lengthOfFortunes() {
        return this.fortunes.length;
    }

    /**
     * @returns {Omikuji}
     */
    start() {
        setInterval(() => this.mainloop(), this.interval);
        return this;
    }

    /**
     * @returns {void}
     */
    mainloop() {
        const randomInt = this.#getRandomInt(this.lengthOfFortunes);
        const fortune = this.fortunes[randomInt];
        this.#root.innerText = fortune;
    }

    /**
     * @param {number} maxValue
     * @returns {number}
     */
    #getRandomInt(maxValue) {
        return (Math.floor(Math.random() * maxValue));
    }
}