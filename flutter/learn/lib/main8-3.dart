import 'package:flutter/material.dart';
import './utils/eventBus.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('8-3事件总线'),
        ),
        body: Center(
          child: Column(
            children: <Widget>[DemoPage1(), DemoPage2()],
          ),
        ),
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
  String text = '';
  @override
  void initState() {
    // TODO: implement initState
    bus.on('update', (arg) {
      setState(() {
        text = arg;
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text(text),
    );
  }
}

class DemoPage2 extends StatefulWidget {
  DemoPage2({Key key}) : super(key: key);

  @override
  _DemoPage2State createState() => _DemoPage2State();
}

class _DemoPage2State extends State<DemoPage2> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: RaisedButton(
        child: Text('点击'),
        onPressed: () {
          bus.emit('update', '状态发生了改变');
        },
      ),
    );
  }
}
