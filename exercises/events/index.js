// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] ? [...this.events[eventName], callback] : [callback];
    console.warn(this.events);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) this.events[eventName].map(callback => callback());
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events[eventName] = [];
  }
}

module.exports = Events;
