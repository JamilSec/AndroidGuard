class ColorLogger {
    static reset = "\x1b[0m";
    static red = "\x1b[31m";
    static green = "\x1b[32m";
    static yellow = "\x1b[33m";
    static blue = "\x1b[34m";
    static magenta = "\x1b[35m";
    static cyan = "\x1b[36m";
    static white = "\x1b[37m";

    static log(message, value, color = ColorLogger.reset, color2 = ColorLogger.reset) {
        console.log(`${color}${message}${ColorLogger.reset}${color2}${value}${ColorLogger.reset}`);
    }
}

Java.perform(() => {
    // Uso de const en lugar de var para una mejor práctica
    const RecaptchaManager = Java.use("com.paparazziteam.securityapplicationapp.utils.RecaptchaManager");

    // Implementación del método usando una función tradicional
    RecaptchaManager.getSiteKey.implementation = function () {
        // this se refiere al objeto RecaptchaManager en este contexto
        const siteKey = this.getSiteKey();
        ColorLogger.log("\n[*] getSiteKey encontrada : ", siteKey, ColorLogger.green, ColorLogger.yellow);
        return siteKey;
    };
});