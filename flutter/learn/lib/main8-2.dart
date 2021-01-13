import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: DemoPage4(),
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

class DemoPage3 extends StatefulWidget {
  DemoPage3({Key key}) : super(key: key);

  @override
  _DemoPage3State createState() => _DemoPage3State();
}

class _DemoPage3State extends State<DemoPage3> {
  double _width = 200;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('缩放'),
      ),
      body: Center(
        child: GestureDetector(
          child: Image.asset('assets/image/kda1.jpg', width: _width),
          onScaleUpdate: (ScaleUpdateDetails e) {
            setState(() {
              _width = 200 * e.scale.clamp(0.8, 100);
            });
          },
        ),
      ),
    );
  }
}

class DemoPage4 extends StatefulWidget {
  DemoPage4({Key key}) : super(key: key);

  @override
  _DemoPage4State createState() => _DemoPage4State();
}

class _DemoPage4State extends State<DemoPage4> {
  TapGestureRecognizer _recognizer = new TapGestureRecognizer();
  bool _toggle = false;

  @override
  void dispose() {
    // TODO: implement dispose
    _recognizer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('GestureRecognizer'),
      ),
      // TextSpan 不是一个widget
      body: Center(
        child: Text.rich(TextSpan(children: [
          TextSpan(text: '你好世界'),
          TextSpan(
              text: '点我变色',
              style: TextStyle(color: _toggle ? Colors.red : Colors.blue),
              recognizer: _recognizer
                ..onTap = () {
                  setState(() {
                    _toggle = !_toggle;
                  });
                })
        ])),
      ),
    );
  }
}
