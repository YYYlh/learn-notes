import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  Future<String> mockNetWorkData() async {
    return Future.delayed(Duration(seconds: 4), () => '我是从互联网上获取的数据');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('7-5 异步widget'),
        ),
        body: Center(
          child: FutureBuilder(
            future: mockNetWorkData(),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              if (snapshot.connectionState == ConnectionState.done) {
                if (snapshot.hasData) {
                  return Text(snapshot.data);
                } else {
                  return Text(snapshot.error);
                }
              } else {
                return CircularProgressIndicator();
              }
            },
          ),
        ),
      ),
    );
  }
}
