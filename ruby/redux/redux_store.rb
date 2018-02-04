# Implementation of a reduc store using Ruby.
#
# Usage:
# counter_store = ReduxStore.new(reducer)
# counter_store.dispatch({ type: 'increment' })

# ReduxStore.
class ReduxStore
  attr_reader :current_state

  def initialize(reducer, initial_state = nil)
    @reducer = reducer
    @listeners = []
    @current_state = initial_state
  end

  def dispatch(action)
    @current_state = @reducer.call(@current_state, action)
    @listeners.map { |l| l.call(@current_state) }
  end

  def subscribe(listener)
    @listeners.push(listener)
    -> { @listeners.delete(listener) }
  end
end
