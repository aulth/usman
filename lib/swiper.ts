class Swiper {
    private xStart: number | null = null;
    private yStart: number | null = null;
    private element: HTMLElement;
    private onLeftCallback?: () => void;
    private onRightCallback?: () => void;
    private onUpCallback?: () => void;
    private onDownCallback?: () => void;

    constructor(element: string | HTMLElement) {
        this.element = typeof element === "string" ? document.querySelector(element)! : element;

        if (!this.element) {
            throw new Error("Element not found");
        }

        this.element.addEventListener('touchstart', this.handleTouchStart.bind(this), {passive: true});
        this.element.addEventListener('mousedown', this.handleMouseDown.bind(this), {passive: true});
    }

    private handleTouchStart = (evt: TouchEvent): void => {
        this.xStart = evt.touches[0].clientX;
        this.yStart = evt.touches[0].clientY;
    }

    private handleTouchMove = (evt: TouchEvent): void => {
        this.handleSwipe(evt.touches[0].clientX, evt.touches[0].clientY);
    }

    private handleMouseDown = (evt: MouseEvent): void => {
        this.xStart = evt.clientX;
        this.yStart = evt.clientY;
        this.element.addEventListener('mouseup', this.handleMouseUp.bind(this), {passive: true});
    }

    private handleMouseUp = (evt: MouseEvent): void => {
        this.handleSwipe(evt.clientX, evt.clientY);
        this.element.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    private handleSwipe(xEnd: number, yEnd: number): void {
        if (!this.xStart || !this.yStart) {
            return;
        }

        const xDiff = xEnd - this.xStart;
        const yDiff = yEnd - this.yStart;

        if (Math.abs(xDiff) > 7 && Math.abs(xDiff) > Math.abs(yDiff)) {
            // swiped to x direction;
            if (xEnd > this.xStart && this.onRightCallback) {
                // swiped to right direction
                this.onRightCallback();
            } else if (this.onLeftCallback) {
                // swiped to left direction
                this.onLeftCallback();
            }
        } else if (Math.abs(yDiff) > 7) {
            // swiped to y direction;
            if (yEnd > this.yStart && this.onUpCallback) {
                // swiped to bottom
                this.onUpCallback();
            } else if (this.onDownCallback) {
                // swiped to up
                this.onDownCallback();
            }
        }

        this.xStart = null;
        this.yStart = null;
    }

    public onLeft(callback: () => void): void {
        this.onLeftCallback = callback;
        return;
    }

    public onRight(callback: () => void): void {
        this.onRightCallback = callback;
        return;
    }

    public onUp(callback: () => void): void {
        this.onUpCallback = callback;
        return;
    }

    public onDown(callback: () => void): void {
        this.onDownCallback = callback;
        return;
    }

    public run(): void {
        this.element.addEventListener('touchmove', this.handleTouchMove.bind(this), {passive: true});
    }

    public destroy(): void{
        this.element.removeEventListener('touchmove', this.handleTouchMove.bind(this));
        this.element.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.element.removeEventListener('mousedown', this.handleMouseDown.bind(this));
        
    }
}

export default Swiper;