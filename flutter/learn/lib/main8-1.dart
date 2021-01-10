import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('8-1 原始指针事件处理'),
        ),
        body: DemoPage1(),
      ),
    );
  }
}

class DemoPage1 extends StatefulWidget {
  DemoPage1({Key key}) : super(key: key);

  @override
  _DemoPage1State createState() => _DemoPage1State();
}

class _DemoPage1State extends State<DemoPage1> {
  PointerEvent _event;
  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerMove: (PointerEvent event) => setState(() => _event = event),
      onPointerDown: (PointerEvent event) => setState(() => _event = event),
      onPointerUp: (PointerEvent event) => setState(() => _event = event),
      child: Container(
          width: 300,
          height: 100,
          color: Colors.blue,
          child: Text(
            _event?.toString() ?? '',
            style: TextStyle(fontSize: 16, color: Colors.white),
          )),
    );
  }
}
