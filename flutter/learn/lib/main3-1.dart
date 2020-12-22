import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      // home: Scaffold(
      //     appBar: AppBar(
      //       title: Text('3-1 Widget简介'),
      //     ),
      //     body: Echo(text: 'hello world')),
      home: Counter(),
    );
  }
}

class Echo extends StatelessWidget {
  final String text;
  const Echo({Key key, @required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 获取上一级的widget
    Scaffold scaffold = context.findAncestorWidgetOfExactType<Scaffold>();
    return (scaffold.appBar as AppBar).title;
  }
}

class Counter extends StatefulWidget {
  final int initValue;
  Counter({Key key, this.initValue: 0}) : super(key: key);

  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _counter;
  @override
  void initState() {
    super.initState();
    _counter = widget.initValue;
    print('initState');
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    print('didChangeDependencies');
  }

  // 在热重载时会被调用
  @override
  void reassemble() {
    super.reassemble();
    print('reassemble');
  }

  @override
  void didUpdateWidget(Counter oldWidget) {
    super.didUpdateWidget(oldWidget);
    print('didUpdateWidget');
  }

  @override
  void deactivate() {
    super.deactivate();
    print('deactivate');
  }

  @override
  void dispose() {
    super.dispose();
    print('dispose');
  }

  static GlobalKey<ScaffoldState> _globalKey = GlobalKey();
  @override
  Widget build(BuildContext context) {
    print('build');
    return Scaffold(
      key: _globalKey,
      body: Center(
        child: Column(
          children: <Widget>[
            FlatButton(
              child: Text('$_counter'),
              onPressed: () {
                setState(() {
                  _counter++;
                });
              },
            ),
            Container(
              child: Builder(builder: (context) {
                return RaisedButton(
                  child: Text('显示SnackBar-context'),
                  onPressed: () {
                    ScaffoldState _state =
                        context.findAncestorStateOfType<ScaffoldState>();
                    _state.showSnackBar(SnackBar(
                      content: Text('我是显示SnackBar'),
                    ));
                  },
                );
              }),
            ),
            RaisedButton(
              child: Text('显示SnackBar-GlobalKey'),
              onPressed: () {
                _globalKey.currentState.showSnackBar(SnackBar(
                  content: Text('我是显示SnackBar'),
                ));
              },
            )
          ],
        ),
      ),
    );
  }
}
