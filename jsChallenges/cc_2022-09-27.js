function Stopwatch(){
    let duration = 0;
    let status;
    let startTime;
    let endTime;
    this.start = () =>{
      if(status){
        throw new Error('Stopwatch has already started.')
      }else{
        startTime = performance.now();
        status = true;
      }
    };
    this.stop = () =>{
      if(!status){
        throw new Error('Stopwatch is not started.')
      }else{
        endTime = performance.now();
        const seconds = (endTime - startTime)*0.001;
        duration += seconds;
        status = false;
      }    
    };
    this.reset = () =>{
      duration = 0;
      status = false;
    };
    Object.defineProperty(this, 'duration', {
      get : function (){
        return duration;
      }
    })
    }
  
  let sw = new Stopwatch();