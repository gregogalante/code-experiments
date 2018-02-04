# Implementation of a reduc store using Ruby.
#
# Basic usage:
# counter_store = ReduxStore.new(reducer)
# counter_store.dispatch({ type: 'increment' })
#
# Combine reducer usage:
# root_reducer = ReduxStore.combine_reducers({ counter: counter_reducer, todos: todos_reducer })
# counter_store = ReduxStore.new(root_reducer)
# counter_store.dispatch({ type: 'increment' })

# ReduxStore.
class ReduxStore
  attr_reader :current_state

  def initialize(reducer)
    @reducer = reducer
    @listeners = []
    @current_state = nil
    dispatch({})
  end

  def dispatch(action)
    @current_state = @reducer.call(@current_state, action)
    @listeners.map(&:call)
  end

  def subscribe(listener)
    @listeners.push(listener)
    -> { @listeners.delete(listener) }
  end

  def self.combine_reducers(reducers)
    ->(state, action) {
      state ||= {}

      reducers.each_with_object({}) do |next_state, (key, reducer)|
        next_state[key] = reducer.call(state[key], action)
        next_state
      end
    }
  end
end
