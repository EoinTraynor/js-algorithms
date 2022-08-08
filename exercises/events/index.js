// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

// class Events {
//   constructor() {
//     this.events = {};
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     this.events[eventName] = this.events[eventName] ? [...this.events[eventName], callback] : [callback];
//     console.warn(this.events);
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     if (this.events[eventName]) this.events[eventName].map(callback => callback());
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     this.events[eventName] = [];
//   }
// }

class Events {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    const event = this.events[eventName];
    event ? event.push(callback) : this.events[eventName] = [callback];
  }
  trigger(eventName) {
    const event = this.events[eventName];
    if (event) event.forEach(callback => callback());
  }
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
