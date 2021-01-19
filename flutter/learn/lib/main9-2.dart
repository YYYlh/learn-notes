import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('9-2 动画基本接口及状态监听'),
        ),
        body: DemoPage1(),
      ),
    );
  }
}

class AnimateImage extends AnimatedWidget {
  AnimateImage({Key key, Animation<double> animation})
      : super(key: key, listenable: animation);
  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable;
    return Center(
        child: Image.asset(
      'assets/image/kda1.jpg',
      fit: BoxFit.cover,
      width: animation.value,
      height: animation.value,
    ));
  }
}

class DemoPage1 extends StatefulWidget {
  DemoPage1({Key key}) : super(key: key);

  @override
  _DemoPage1State createState() => _DemoPage1State();
}

class _DemoPage1State extends State<DemoPage1>
    with SingleTickerProviderStateMixin {
  AnimationController animationController;
  Animation animation;

  @override
  void initState() {
    super.initState();
    animationController =
        new AnimationController(vsync: this, duration: Duration(seconds: 1));
    animation =
        CurvedAnimation(parent: animationController, curve: Curves.bounceIn);
    animation = new Tween(begin: 0.0, end: 300.0).animate(animation);
    animationController.forward();
    animation.addStatusListener((status) {
      if (status == AnimationStatus.completed)
        animationController.reverse();
      else if (status == AnimationStatus.dismissed)
        animationController.forward();
    });
  }

  @override
  void dispose() {
    super.dispose();
    animationController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // return AnimateImage(animation: animation);
    return AnimatedBuilder(
      child: Image.asset('assets/image/kda1.jpg'),
      animation: animation,
      builder: (context, child) {
        return Center(
          child: Container(
            child: child,
            width: animation.value,
            height: animation.value,
          ),
        );
      },
    );
  }
}
