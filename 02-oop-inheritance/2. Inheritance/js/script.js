// Exercise 2

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

/* Movie */

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play(){
        super.emit('play');
    }
    pause(){
        super.emit('pause');
    }
    resume(){
        super.emit('resume');
    }
}

const theIronGiant = new Movie('The Iron Giant', 1999, '1h 26m');
const toyStory = new Movie('Toy Story', 1995, '1h 21m');
const gladiator = new Movie('Gladiator', 2000, '2h 35m');

console.log(`Movie Title: ${gladiator.title} - Year: ${gladiator.year} - Duration: ${gladiator.duration}`);
console.log(`Movie Title: ${toyStory.title} - Year: ${toyStory.year} - Duration: ${toyStory.duration}`);

gladiator.on('play', () => console.log(`This is the 'Gladiator' PLAY event.`));
gladiator.on('pause', () => console.log(`This is the 'Gladiator' PAUSE event.`));
gladiator.on('resume', () => console.log(`This is the 'Gladiator' RESUME event.`));

gladiator.play();
gladiator.pause();
gladiator.resume();

toyStory.on('play', () => console.log(`This is the 'Toy Story' PLAY event.`));
toyStory.on('pause', () => console.log(`This is the 'Toy Story' PAUSE event.`));
toyStory.on('resume', () => console.log(`This is the 'Toy Story' RESUME event.`));

toyStory.play();
toyStory.pause();
toyStory.resume();