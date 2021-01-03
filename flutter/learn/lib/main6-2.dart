import 'package:flutter/material.dart';

void main() => runApp(MyApp());
String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('6-2 SingleChildScrollView'),
        ),
        body: Scrollbar(
          child: SingleChildScrollView(
            child: Center(
              child: Column(
                children: str
                    .split("")
                    .map((e) => Text(
                          e,
                          textScaleFactor: 2,
                        ))
                    .toList(),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
