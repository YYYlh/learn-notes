import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('10-2 组合现有组件'),
        ),
        body: Center(
          child: GradientButton(
            height: 30,
            width: 60,
            colors: [Colors.red, Colors.yellow],
            child: Text('点击'),
            onPressed: () {
              print('1');
            },
            borderRadius: BorderRadius.all(Radius.circular(10)),
          ),
        ),
      ),
    );
  }
}

class GradientButton extends StatelessWidget {
  final Widget child;
  final BorderRadius borderRadius;
  final double width;
  final double height;
  final List<Color> colors;
  final GestureTapCallback onPressed;

  const GradientButton(
      {Key key,
      @required this.child,
      this.borderRadius,
      this.width,
      this.height,
      this.colors,
      this.onPressed})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    List<Color> _colors = colors ??
        [theme.primaryColor, theme.primaryColorDark ?? theme.primaryColor];

    return DecoratedBox(
      decoration: BoxDecoration(
          borderRadius: borderRadius,
          gradient: LinearGradient(colors: _colors)),
      child: Material(
        type: MaterialType.transparency,
        child: InkWell(
          splashColor: _colors.last,
          highlightColor: Colors.transparent,
          onTap: onPressed,
          borderRadius: borderRadius,
          child: ConstrainedBox(
            constraints: BoxConstraints.tightFor(width: width, height: height),
            child: Center(
              child: DefaultTextStyle(
                style: TextStyle(fontWeight: FontWeight.bold),
                child: child,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
