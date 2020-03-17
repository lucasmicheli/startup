// Exercise 1

/* Movie */

class Movie{
    constructor(title, year, duration){
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play(){
        return `Play ${this.title}`;
    }
    pause(){
        return `Pause ${this.title}`;
    }
    resume(){
        return `Resume ${this.title}`;
    }
}

const theIronGiant = new Movie('The Iron Giant', 1999, '1h 26m');
const toyStory = new Movie('Toy Story', 1995, '1h 21m');
const gladiator = new Movie('Gladiator', 2000, '2h 35m');

console.log(`Movie Title: ${gladiator.title} - Year: ${gladiator.year} - Duration: ${gladiator.duration}`);

console.log(toyStory.play());
console.log(toyStory.pause());
console.log(toyStory.resume());

/* Actor */

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const russellCrowe = new Actor('Russell Crowe', 55);
const tomHanks = new Actor('Tom Hanks', 63);
const jenniferAniston = new Actor('Jennifer Aniston', 50)

console.log(`Actor Name: ${tomHanks.name}, Age: ${tomHanks.age}`);

/* Event Emitter */

class EventEmitter{
    constructor(){
        this.events = {};
    }

    on(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }   
        this.events[eventName].push(callback);
    }

    emit(eventName){    
        if(this.events[eventName]){
            this.events[eventName].forEach(callback => {
                callback.call(eventName);
            });
        }
    }

    off(eventName, callbackRemove){
        this.events[eventName] = this.events[eventName].filter(callback => callback !== callbackRemove);
    }
}

const emitterTest = new EventEmitter();
emitterTest.on('1stTest', () => console.log("1st Test - Callback 1"));
emitterTest.on('2ndTest', () => console.log("2nd Test - Callback 1"));

const newCallback = () => console.log("2nd Test - Callback 2");
emitterTest.on('2ndTest', newCallback);

emitterTest.emit('1stTest'); // 1st Test - Callback 1
emitterTest.emit('2ndTest'); // 2nd Test - Callback 1

emitterTest.off('2ndTest', newCallback); // 2nd Test - Callback 2

emitterTest.emit('2ndTest'); // 2nd Test - Callback 1