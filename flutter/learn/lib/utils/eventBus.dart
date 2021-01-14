typedef void EventCallback(arg);

class EventBus {
  EventBus._internal();
  static EventBus __singleton = new EventBus._internal();
  factory EventBus() => __singleton;

  var _eamp = new Map<Object, List<EventCallback>>();

  void on(eventName, EventCallback f) {
    if (eventName == null || f == null) {
      return;
    }
    _eamp[eventName] ??= new List<EventCallback>();
    _eamp[eventName].add(f);
  }

  void off(eventName, [EventCallback f]) {
    var list = _eamp[eventName];
    if (list == null || eventName == null) {
      return;
    }
    if (f == null) {
      _eamp[eventName] = null;
    } else {
      list.remove(f);
    }
  }

  void emit(eventName, [args]) {
    var list = _eamp[eventName];
    if (list == null) {
      return;
    }
    print(list.length);
    for (var i = list.length - 1; i >= 0; i--) {
      list[i](args);
    }
  }
}

var bus = EventBus();
