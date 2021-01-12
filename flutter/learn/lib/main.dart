import 'package:flutter/material.dart';
import 'package:learn/main1-1.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: DemoPage2(),
    );
  }
}

class DemoPage extends StatefulWidget {
  DemoPage({Key key}) : super(key: key);

  @override
  _DemoPageState createState() => _DemoPageState();
}

class _DemoPageState extends State<DemoPage> {
  String _operation = '没有操作';
  void updateText(text) {
    setState(() {
      _operation = text;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('手势检测（单击、双击、长按）'),
      ),
      body: Center(
        child: GestureDetector(
          child: Container(
            width: 200,
            height: 150,
            alignment: Alignment.center,
            color: Colors.blue,
            child: Text(
              _operation,
              style: TextStyle(color: Colors.white),
            ),
          ),
          onTap: () => updateText('单击'),
          onDoubleTap: () => updateText('双击'),
          onLongPress: () => updateText('长按'),
          // 当同时监听单击和双击时候 单击会有200ms的延迟
        ),
      ),
    );
  }
}

class DemoPage2 extends StatefulWidget {
  DemoPage2({Key key}) : super(key: key);

  @override
  _DemoPage2State createState() => _DemoPage2State();
}

class _DemoPage2State extends State<DemoPage2> {
  double _top = 0;
  double _left = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('拖动、滑动'),
      ),
      body: Stack(
        children: <Widget>[
          Positioned(
            top: _top,
            left: _left,
            child: GestureDetector(
                onPanDown: (DragDownDetails e) {
                  print(e.globalPosition);
                },
                onPanUpdate: (DragUpdateDetails e) {
                  setState(() {
                    _top += e.delta.dy;
                    _left += e.delta.dx;
                  });
                },
                onPanEnd: (DragEndDetails e) {
                  print(e.velocity);
                },
                child: CircleAvatar(
                  child: Text('A'),
                )),
          )
        ],
      ),
    );
  }
}
