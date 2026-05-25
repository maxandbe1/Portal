export class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  }

  emit(event, data) {
    const handlers = this.listeners[event] || [];
    for (const handler of handlers) {
      handler(data);
    }
  }
}
