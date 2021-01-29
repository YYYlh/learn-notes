import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('10-3 组合实例'),
        ),
        body: DemoPage(),
      ),
    );
  }
}

class DemoPage extends StatefulWidget {
  DemoPage({Key key}) : super(key: key);

  @override
  _DemoPageState createState() => _DemoPageState();
}

class _DemoPageState extends State<DemoPage> {
  double _turns = 0;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          TurnBox(
            turns: _turns,
            child: Icon(Icons.refresh),
          ),
          RaisedButton(
            child: Text('旋转30°'),
            onPressed: () {
              setState(() {
                _turns += (1 / 12);
              });
            },
          )
        ],
      ),
    );
  }
}

class TurnBox extends StatefulWidget {
  TurnBox({Key key, this.turns = 0, this.speed = 200, @required this.child})
      : super(key: key);

  final double turns;
  final int speed;
  final Widget child;
  @override
  _TurnBoxState createState() => _TurnBoxState();
}

class _TurnBoxState extends State<TurnBox> with SingleTickerProviderStateMixin {
  AnimationController _controller;

  @override
  void initState() {
    _controller = new AnimationController(
        vsync: this, lowerBound: -double.infinity, upperBound: double.infinity)
      ..value = widget.turns;
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  void didUpdateWidget(TurnBox oldWidget) {
    super.didUpdateWidget(oldWidget);
    print(oldWidget.turns);
    print(widget.turns);
    if (oldWidget.turns != widget.turns) {
      _controller.animateTo(widget.turns,
          duration: Duration(milliseconds: widget.speed), curve: Curves.ease);
    }
  }

  @override
  Widget build(BuildContext context) {
    return RotationTransition(
      turns: _controller,
      child: widget.child,
    );
  }
}
