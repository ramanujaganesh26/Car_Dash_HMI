/**
 * AdaptiveLayoutManager manages responsive scaling of UI elements based on window dimensions.
 * 
 * @constructor
 * @param {number} originalWidth - The base design width.
 * @param {number} originalHeight - The base design height.
 * @param {number} newWidth - The current window width.
 * @param {number} newHeight - The current window height.
 */
function AdaptiveLayoutManager(originalWidth, originalHeight, newWidth, newHeight) {
    this.originalWidth = originalWidth;
    this.originalHeight = originalHeight;
    this.newWidth = newWidth;
    this.newHeight = newHeight;
}

/**
 * Updates the current window width.
 * 
 * @param {number} width - New window width.
 */
AdaptiveLayoutManager.prototype.updateWindowWidth = function(width) {
    this.newWidth = width;
}

/**
 * Updates the current window height.
 * 
 * @param {number} height - New window height.
 */
AdaptiveLayoutManager.prototype.updateWindowHeight = function(height) {
    this.newHeight = height;
}

/**
 * Calculates the scaled width based on current window dimensions.
 * 
 * @param {number} width - Original width value to scale.
 * @returns {number} The scaled width.
 */
AdaptiveLayoutManager.prototype.width = function(width) {
    var factor = width / this.originalWidth;
    var adaptiveWidth = factor * this.newWidth;
    return adaptiveWidth;
}

/**
 * Calculates the scaled height based on current window dimensions.
 * 
 * @param {number} height - Original height value to scale.
 * @returns {number} The scaled height.
 */
AdaptiveLayoutManager.prototype.height = function(height) {
    var factor = height / this.originalHeight;
    var adaptiveHeight = factor * this.newHeight;
    return adaptiveHeight;
}

/**
 * Calculates the average scaled dimension using both width and height scaling factors.
 * 
 * @param {number} avg - Original dimension value to scale.
 * @returns {number} The average scaled dimension.
 */
AdaptiveLayoutManager.prototype.average = function(avg) {
    var adaptiveAvg = (this.height(avg) + this.width(avg)) / 2;
    return adaptiveAvg;
}
