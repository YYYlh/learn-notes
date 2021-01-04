import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Widget divider1 = Divider(color: Colors.blue);
    Widget divider2 = Divider(color: Colors.green);
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
          appBar: AppBar(
            title: Text('6.3 ListView'),
          ),
          body: InfiniteListView()),
      // body: Column(
      //   children: <Widget>[
      //     ListTile(
      //       title: Text('商品列表'),
      //     ),
      //     Expanded(
      //       child: Scrollbar(
      //           child: ListView.separated(
      //         itemBuilder: (BuildContext context, int index) {
      //           return ListTile(
      //             title: Text('$index'),
      //           );
      //         },
      //         separatorBuilder: (BuildContext context, int index) {
      //           return index % 2 == 0 ? divider1 : divider2;
      //         },
      //         itemCount: 20,
      //       )),
      //     )
      //   ],
      // )),
    );
  }
}

class InfiniteListView extends StatefulWidget {
  InfiniteListView({Key key}) : super(key: key);

  @override
  _InfiniteListViewState createState() => _InfiniteListViewState();
}

class _InfiniteListViewState extends State<InfiniteListView> {
  static String loadingTag = "loading";
  var _words = <String>[loadingTag];
  void _retrieveData() {
    Future.delayed(Duration(seconds: 2)).then((value) {
      setState(() {
        _words.insertAll(_words.length - 1,
            generateWordPairs().take(20).map((e) => e.asPascalCase).toList());
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: _words.length,
      itemBuilder: (BuildContext context, int index) {
        if (_words[index] == 'loading') {
          if (_words.length - 1 < 100) {
            _retrieveData();
            return Container(
              child: Text('加载中。。。'),
            );
          } else {
            return Container(
              child: Text('已经没有了'),
            );
          }
        }
        return ListTile(
          title: Text(_words[index]),
        );
      },
      separatorBuilder: (BuildContext context, int index) => Divider(
        height: .0,
      ),
    );
  }
}
