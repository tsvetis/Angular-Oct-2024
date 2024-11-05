// How Zone.jS notifies angular for async request
// Async - SetTimeout, SetInterval, Async Pipe, API Calls, Click event

// Standard console log
console.log(123);

// Monkey patched console log
const originalConsoleLog = console.log;

console.log = (...args) => {
  originalConsoleLog(...args); // invokes the original copy

  // Notify Angular to Detect Changes
  console.warn('Notify Angular to Render!');
  // notifyAngularToDetechChanges()
};

console.log(3456);
