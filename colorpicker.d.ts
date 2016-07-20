/**
 * Contains the ColorPicker class.
 */
declare module "nativescript-color-picker" {
    /**
     * Represents the color picker.
     */
    export class ColorPicker {

        /**
         * Opens the color picker dialog.
         * @param {string} [initialColor='#ff4801'] - The initial selected color.
         * @param {string} [ColorMode='RGB'] - The color mode of the dialog.
         * @returns {number} Android color int
         */
        show(initialColor?: string, colorMode?: string): Promise<number>;
    }

}