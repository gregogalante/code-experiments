require './redux_store'

counter_reducer = ->(current_state, action) {
  case action[:type]
  when 'increment'
    current_state + 1
  when 'decrement'
    current_state - 1
  else
    current_state
  end
}

listener = ->(state) {
  puts "The state is changed to #{state}"
}

counter_store = ReduxStore.new(counter_reducer, 0)
counter_store.subscribe(listener)
counter_store.dispatch(type: 'increment')
counter_store.dispatch(type: 'decrement')
