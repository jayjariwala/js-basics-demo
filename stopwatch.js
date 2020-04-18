function StopWatch() {
  let started, startTime, ended, duration = 0;

  this.start = function() {
    if(started) throw Error('The Stop watch already started!');
    started = 1;
    let startDate = new Date();
    startTime = startDate.getTime();
  }
  this.stop = function() {
    if(ended) throw Error('The Stop is not started!');
    ended = 1;
    let endDate = new Date();
    let endTime = endDate.getTime();
    duration = Math.round((endTime - startTime) / 1000) + 's';
    console.log(duration);
  }
  this.reset = function() {
    started = 0;
    startTime = 0;
    ended = 0;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  })
}


// duration - member
// stop - method
// start - method
// reset - method