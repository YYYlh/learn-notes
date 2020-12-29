import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
          appBar: AppBar(
            title: Text('4-6 对齐与相对定位'),
          ),
          body: Column(
            // mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Container(
                color: Colors.blue[50],
                child: Align(
                    widthFactor: 2,
                    heightFactor: 2,
                    // 坐标系原点在中间，所以1为自己size的一半大小
                    // alignment: Alignment(1, 0),
                    // 坐标系原点在左上角，所以1为自己size的大小
                    alignment: FractionalOffset(1, 0),
                    child: Container(
                      width: 60,
                      height: 60,
                      color: Colors.red,
                    )),
              )
            ],
          )),
    );
  }
}
