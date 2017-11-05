// TaskQueue
// /////////////////////////////////////////////////////////////////////////////

// This module help user to exec functions in parallel mode with the limit of
// number of executions on same times.
// The default number of parallels tasks on same time is 5 but you can change
// this value with setLimit(limit) function.

// /////////////////////////////////////////////////////////////////////////////

function TaskQueue (limit) {
  this.limit = limit
  this.running = 0
  this.queue = []
}

TaskQueue.prototype = {

  /** @function public setLimit(limit).

  This function set a new limit of parallels functions that can be executed.

  @param {integer} limit the limit of functions that can be executed.
  */

  setLimit: function (limit) {
    this.limit = limit
  },

  /** @function public pushTask(task).

  This function add a new task on the queue.

  @param {function} task the task thath should be added to the queue. It needs
  to have a callback function as params.
  */

  pushTask: function (task) {
    this.queue.push(task)
    this.nextTask()
  },

  /** @function public nextTask().

  This function call the task and update running informations.
  */

  nextTask: function () {
    let self = this
    while (self.running < self.limit && self.queue.length) {
      let task = self.queue.shift()
      task(() => {
        self.running--
        self.nextTask()
      })
      self.running++
    }
  }

}

module.exports = new TaskQueue()
