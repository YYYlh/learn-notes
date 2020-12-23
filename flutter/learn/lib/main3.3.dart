import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
          appBar: AppBar(
            title: Text('3-3 文本、字体样式'),
          ),
          body: Column(
            children: <Widget>[
              Text('hello' * 16),
              Text(
                'hello' * 16,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              Text(
                'hello' * 16,
                textAlign: TextAlign.center,
              ),
              Text(
                'hello',
                textScaleFactor: 2,
              ),
              Text(
                'hello world',
                style: TextStyle(
                    color: Colors.blue,
                    fontSize: 18,
                    height: 1,
                    background: Paint()..color = Colors.yellow,
                    decoration: TextDecoration.underline,
                    decorationStyle: TextDecorationStyle.dotted),
              ),
              Text.rich(TextSpan(children: [
                TextSpan(text: 'Email:'),
                TextSpan(
                    text: '1184262331@qq.com',
                    style: TextStyle(color: Colors.blue))
              ])),
              DefaultTextStyle(
                style: TextStyle(color: Colors.red),
                child: Column(
                  children: <Widget>[
                    Text('我继承了默认样式'),
                    Text('我也继承了默认样式'),
                    Text(
                      '我有自己的样式哦',
                      style: TextStyle(color: Colors.green),
                    )
                  ],
                ),
              )
            ],
          )),
    );
  }
}
