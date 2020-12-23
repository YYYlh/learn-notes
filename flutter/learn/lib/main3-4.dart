import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('3-4 按钮'),
        ),
        body: Column(
          children: <Widget>[
            // 漂浮按钮
            RaisedButton(
              child: Text('normal'),
              // 没有回调函数时处于禁用（disabled）状态
              onPressed: () {},
            ),
            // 扁平化按钮
            FlatButton(
              child: Text('normal'),
              onPressed: () {},
            ),
            OutlineButton(
              child: Text('normal'),
              onPressed: () {},
            ),
            IconButton(
              icon: Icon(Icons.ac_unit),
              onPressed: () {},
            ),
            RaisedButton.icon(
                onPressed: () {}, icon: Icon(Icons.send), label: Text('发送')),
            FlatButton(
              child: Text('submit'),
              color: Colors.blue,
              highlightColor: Colors.blue[700],
              colorBrightness: Brightness.dark,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20)),
              onPressed: () {},
            ),
          ],
        ),
      ),
    );
  }
}
