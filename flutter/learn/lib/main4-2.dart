import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
          appBar: AppBar(
            title: Text('线性布局'),
          ),
          body: ColumbDemo2()),
    );
  }
}

class RowDemo extends StatelessWidget {
  const RowDemo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      // textDirection: TextDirection.ltr,
      // mainAxisAlignment: MainAxisAlignment.center,
      // verticalDirection: VerticalDirection.down,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: <Widget>[
        Text(
          'hello world',
          style: TextStyle(fontSize: 30),
        ),
        Text('i am jack')
      ],
    );
  }
}

class ColumnDemo1 extends StatelessWidget {
  const ColumnDemo1({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      // crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[Text('hello world'), Text('i am jack')],
    );
  }
}

class ColumbDemo2 extends StatelessWidget {
  const ColumbDemo2({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green,
      child: Column(
        mainAxisSize: MainAxisSize.max, // 占满屏幕
        children: <Widget>[
          Container(
            color: Colors.red,
            child: Column(
              mainAxisSize: MainAxisSize.max, // 无效
              children: <Widget>[Text('hello world')],
            ),
          )
        ],
      ),
    );
  }
}
