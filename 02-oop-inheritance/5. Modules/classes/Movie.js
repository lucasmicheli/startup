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