import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('9-5 交织动画'),
        ),
        body: StaggerPahe(),
      ),
    );
  }
}

// ignore: must_be_immutable
class StaggerAnimation extends StatelessWidget {
  final AnimationController controller;
  Animation<double> height;
  Animation<Color> color;
  Animation<EdgeInsets> padding;
  StaggerAnimation({Key key, @required this.controller}) : super(key: key) {
    height = Tween<double>(begin: 0, end: 300).animate(CurvedAnimation(
        parent: controller, curve: Interval(0, 0.6, curve: Curves.ease)));

    color = ColorTween(begin: Colors.red, end: Colors.yellow).animate(
        CurvedAnimation(
            parent: controller, curve: Interval(0, 0.6, curve: Curves.ease)));

    padding = Tween<EdgeInsets>(
            begin: EdgeInsets.only(left: 0), end: EdgeInsets.only(left: 200))
        .animate(CurvedAnimation(
            parent: controller, curve: Interval(0.6, 1, curve: Curves.ease)));
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      builder: (BuildContext context, Widget child) {
        return Container(
          alignment: Alignment.bottomCenter,
          padding: padding.value,
          child: Container(
            height: height.value,
            color: color.value,
            width: 20,
          ),
        );
      },
      animation: controller,
    );
  }
}

class StaggerPahe extends StatefulWidget {
  StaggerPahe({Key key}) : super(key: key);

  @override
  _StaggerPaheState createState() => _StaggerPaheState();
}

class _StaggerPaheState extends State<StaggerPahe>
    with TickerProviderStateMixin {
  AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(duration: Duration(seconds: 2), vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: () async {
        _controller.forward();
      },
      child: Center(
        child: Container(
          height: 300,
          width: 300,
          decoration: BoxDecoration(color: Colors.black.withOpacity(0.1)),
          child: StaggerAnimation(
            controller: _controller,
          ),
        ),
      ),
    );
  }
}
