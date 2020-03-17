// Exercise 3

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
        this.cast = []; // Cast array
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
    addCast(cast){
        if(Array.isArray(cast)){
            for(let i=0; i<cast.length; i++){
                if(cast[i] instanceof Actor){
                    this.cast.push(cast[i]);
                }
            }
        } else if(cast instanceof Actor){
            this.cast.push(cast);
        }
        
    }
}

const gladiator = new Movie('Gladiator', 2000, '2h 35m');

/* Actor */

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const russellCrowe = new Actor('Russell Crowe', 55);
const actors = [
    new Actor('Joaquin Phoenix', 45),
    new Actor('Derek Jacobi', 81),
    new Actor('Connie Nielsen', 54)
];

gladiator.addCast(russellCrowe);
gladiator.addCast(actors);
console.log(gladiator.cast); // Test content of cast array

/* Logger */

class Logger{
    constructor(){

    }
    log(info){
        console.log(info);
    }
}

const logger = new Logger();

gladiator.on('play', () => logger.log(`PLAY event emmited`));
gladiator.play(); 