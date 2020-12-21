import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  final String wordPair = new WordPair.random().toString();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
          appBar: AppBar(
            title: Text('包管理、资源管理'),
          ),
          body: Padding(
            padding: EdgeInsets.all(10),
            child: Column(
              children: <Widget>[
                Text(wordPair),
                Image.asset('assets/image/kda1.jpg')
              ],
            ),
          )),
    );
  }
}
