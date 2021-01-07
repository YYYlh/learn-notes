import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: ScrollControllerDemo1(),
    );
  }
}

class ScrollControllerDemo extends StatefulWidget {
  ScrollControllerDemo({Key key}) : super(key: key);

  @override
  _ScrollControllerDemoState createState() => _ScrollControllerDemoState();
}

class _ScrollControllerDemoState extends State<ScrollControllerDemo> {
  bool showToTopBtn = false;
  ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _scrollController.addListener(() {
      print(_scrollController.offset);
      if (_scrollController.offset < 200) {
        setState(() {
          showToTopBtn = false;
        });
      } else {
        setState(() {
          showToTopBtn = true;
        });
      }
    });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    _scrollController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('6-6 滚动监听及控制'),
      ),
      body: ListView.builder(
          controller: _scrollController,
          itemCount: 20,
          itemBuilder: (BuildContext context, int index) {
            return ListTile(
              title: Text('$index'),
            );
          }),
      floatingActionButton: !showToTopBtn
          ? null
          : FloatingActionButton(
              child: Icon(Icons.arrow_upward),
              onPressed: () {
                _scrollController.animateTo(0,
                    duration: Duration(milliseconds: 500),
                    curve: Curves.bounceIn);
              },
            ),
    );
  }
}

class ScrollControllerDemo1 extends StatefulWidget {
  ScrollControllerDemo1({Key key}) : super(key: key);

  @override
  _ScrollControllerDemo1State createState() => _ScrollControllerDemo1State();
}

class _ScrollControllerDemo1State extends State<ScrollControllerDemo1> {
  String _progress = '0%';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('6-6 滚动监听及控制'),
      ),
      body: Scrollbar(
        child: NotificationListener<ScrollNotification>(
          onNotification: (ScrollNotification notification) {
            double progress = notification.metrics.pixels /
                notification.metrics.maxScrollExtent;
            setState(() {
              _progress = '${(progress * 100).toInt()}%';
            });
            return true;
          },
          child: Stack(
            alignment: Alignment.center,
            children: <Widget>[
              ListView.builder(
                  itemCount: 100,
                  itemExtent: 50,
                  itemBuilder: (BuildContext context, int index) {
                    return ListTile(
                      title: Text('$index'),
                    );
                  }),
              CircleAvatar(
                radius: 30,
                backgroundColor: Colors.black54,
                child: Text(_progress),
              )
            ],
          ),
        ),
      ),
    );
  }
}
