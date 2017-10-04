import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class IdleMock {
    private onIdleEnd = new EventEmitter();
    private onIdleStart = new EventEmitter();
    private onTimeout = new EventEmitter();
    private onTimeoutWarning = new EventEmitter();

    watch() {
    }

    setIdle() {
    }

    setTimeout() {
    }

    setInterrupts() {
    }
}
