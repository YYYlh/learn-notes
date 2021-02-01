import 'package:flutter/material.dart';
import 'dart:io';
import 'package:path_provider/path_provider.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Material App Bar'),
        ),
        body: Center(
          child: DemoPage(),
        ),
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
  int _count = 0;

  Future<File> getLocalFile() async {
    var dir = (await getApplicationDocumentsDirectory()).path;
    return new File('$dir/count.txt');
  }

  Future<int> getCount() async {
    try {
      File file = await getLocalFile();
      String contents = await file.readAsString();
      return int.parse(contents);
    } on FileSystemException {
      return 0;
    }
  }

  @override
  void initState() {
    super.initState();

    getCount().then((value) {
      setState(() {
        _count = value;
      });
    });
  }

  void incrementCounter() async {
    setState(() {
      _count++;
    });
    await (await getLocalFile()).writeAsString('$_count');
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text('$_count'),
        RaisedButton(
          child: Text('点击加1'),
          onPressed: incrementCounter,
        )
      ],
    );
  }
}
