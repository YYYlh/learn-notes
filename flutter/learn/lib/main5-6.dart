import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: 'Material App', home: HomePage());
  }
}

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  TabController _tabController;
  List<String> tabList = ['新闻', '历史', '图片'];
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _tabController = TabController(length: tabList.length, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: MyDrawer(),
      appBar: AppBar(
          leading: Builder(builder: (context) {
            return IconButton(
              icon: Icon(Icons.person),
              onPressed: () {
                Scaffold.of(context).openDrawer();
              },
            );
          }),
          title: Text('appName'),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.share),
              onPressed: () {},
            )
          ],
          bottom: TabBar(
            controller: _tabController,
            tabs: tabList.map((e) => Tab(text: e)).toList(),
          )),
      body: TabBarView(
        controller: _tabController,
        children: tabList.map((e) {
          return Container(
            alignment: Alignment.center,
            child: Text(
              e,
              textScaleFactor: 5,
            ),
          );
        }).toList(),
      ),
    );
  }
}

class MyDrawer extends StatelessWidget {
  const MyDrawer({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: MediaQuery.removePadding(
        context: context,
        removeTop: true,
        child: Padding(
          padding: const EdgeInsets.only(top: 38.0),
          child: Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: ClipOval(
                      child: Image.asset(
                        'assets/image/灰原哀.jpg',
                        width: 80,
                      ),
                    ),
                  ),
                  Text(
                    'Liuhao',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  )
                ],
              ),
              Expanded(
                child: ListView(
                  children: <Widget>[
                    ListTile(
                      leading: const Icon(Icons.add),
                      title: const Text('Add account'),
                    ),
                    ListTile(
                      leading: const Icon(Icons.settings),
                      title: const Text('Manage accounts'),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
