class Swiper {
    private xStart: number = 0;
    private yStart: number = 0;
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

        this.element.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.element.addEventListener('mousedown', this.handleMouseDown.bind(this));
    }



    private handleTouchStart(evt: TouchEvent): void {
        this.xStart = 0;
        this.yStart = 0;
    }

    private handleTouchMove(evt: TouchEvent): void {
        this.handleSwipe(evt.touches[0].clientX, evt.touches[0].clientY);
    }

    private handleTouchUp(evt: TouchEvent): void{
        this.handleSwipe(evt.changedTouches[0].pageX, evt.changedTouches[0].pageY);
    }

    private handleMouseDown(evt: MouseEvent): void {
        this.xStart = evt.clientX;
        this.yStart = evt.clientY;
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    private handleMouseMove(evt: MouseEvent): void {
        this.handleSwipe(evt.clientX, evt.clientY);
    }

    private handleMouseUp(evt: MouseEvent): void {
        this.reset();
        document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    private handleSwipe(xEnd: number, yEnd: number): void {
        alert(xEnd + " | " + yEnd)
        if (this.xStart!=0 || this.yStart!=0) {
            return;
        }

        const xDiff = xEnd - this.xStart;
        const yDiff = yEnd - this.yStart;
        alert(xDiff);
        if (Math.abs(xDiff) > 10 && Math.abs(xDiff) > Math.abs(yDiff)) {
            // swiped to x direction;
            if (xEnd > this.xStart && this.onRightCallback) {
                // swiped to right direction
                alert("slided right")
                this.onRightCallback();
            } else if (this.onLeftCallback) {
                // swiped to left direction
                this.onLeftCallback();
            }
        } else if (Math.abs(yDiff) > 10) {
            // swiped to y direction;
            if (yEnd > this.yStart && this.onUpCallback) {
                // swiped to bottom
                this.onUpCallback();
            } else if (this.onDownCallback) {
                // swiped to up
                this.onDownCallback();
            }
        }

        this.reset();
    }

    private reset(): void {
        this.xStart = 0;
        this.yStart = 0;
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

    private destroy(): void{
        this.element.removeEventListener('touchstart', this.handleTouchStart.bind(this));
        this.element.removeEventListener('mousedown', this.handleMouseDown.bind(this));
        this.element.removeEventListener('touchmove', this.handleTouchMove.bind(this));
    }

    public run(): void {
        this.element.addEventListener('touchmove', this.handleTouchMove.bind(this));
    }
}

export default Swiper;