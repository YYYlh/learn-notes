import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '路由',
      initialRoute: '/',
      routes: {
        '/': (context) => HomePage(),
        'newRoute': (context) => NewRoute(
              id: ModalRoute.of(context).settings.arguments,
            )
      },
      // onGenerateRoute: (settings) {},
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('2-2路由管理'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('我是首页'),
            FlatButton(
              child: Text('open new route'),
              textColor: Colors.blue,
              onPressed: () async {
                // var result = await Navigator.of(context).push(MaterialPageRoute(
                //   builder: (context) => NewRoute(
                //     id: '我是参数',
                //   ),
                // ));
                var result = await Navigator.pushNamed(context, 'newRoute',
                    arguments: '我是参数');
                print(result);
              },
            )
          ],
        ),
      ),
    );
  }
}

class NewRoute extends StatelessWidget {
  final String id;
  const NewRoute({Key key, @required this.id}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('new Router Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('我是新的路由页面'),
            Text('这是从上一个页面传递过来的参数：$id'),
            RaisedButton(
              child: Text('返回上一个页面'),
              onPressed: () {
                Navigator.of(context).pop('传递给上一个页面的参数');
              },
            )
          ],
        ),
      ),
    );
  }
}
