class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => {
        callback.call(eventName);
      });
    }
  }

  off(eventName, callbackRemove) {
    this.events[eventName] = this.events[eventName].filter(callback => callback !== callbackRemove);
  }

}
class Logger {
  constructor() {}

  log(info) {
    console.log(info);
  }

}
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = []; // Cast array
  }

  play() {
    super.emit('play');
  }

  pause() {
    super.emit('pause');
  }

  resume() {
    super.emit('resume');
  }

  addCast(cast) {
    if (Array.isArray(cast)) {
      for (let i = 0; i < cast.length; i++) {
        if (cast[i] instanceof Actor) {
          this.cast.push(cast[i]);
        }
      }
    } else if (cast instanceof Actor) {
      this.cast.push(cast);
    }
  }

}
