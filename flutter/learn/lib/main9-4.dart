import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('9-4 Hero动画'),
        ),
        body: Page1(),
      ),
    );
  }
}

class Page1 extends StatelessWidget {
  const Page1({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.topCenter,
      child: InkWell(
        child: Hero(
          tag: 'avatar',
          child: ClipOval(
            child: Image.asset(
              'assets/image/灰原哀.jpg',
              width: 50,
            ),
          ),
        ),
        onTap: () {
          Navigator.push(context, PageRouteBuilder(pageBuilder:
              (BuildContext context, Animation animation,
                  Animation secondaryAnimation) {
            return FadeTransition(
              opacity: animation,
              child: Scaffold(
                appBar: AppBar(
                  title: Text('原图'),
                ),
                body: Page2(),
              ),
            );
          }));
        },
      ),
    );
  }
}

class Page2 extends StatelessWidget {
  const Page2({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Hero(
        tag: 'avatar',
        child: Image.asset(
          'assets/image/灰原哀.jpg',
        ),
      ),
    );
  }
}
