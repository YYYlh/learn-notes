import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // debugPaintSizeEnabled = true;
    return MaterialApp(
      home: Material(
        child: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              pinned: true,
              expandedHeight: 250,
              flexibleSpace: FlexibleSpaceBar(
                title: Text('CustomScrollView'),
                background: Image.asset(
                  'assets/image/kda1.jpg',
                  fit: BoxFit.cover,
                ),
              ),
            ),
            SliverPadding(
              padding: EdgeInsets.all(8),
              sliver: SliverGrid(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    childAspectRatio: 4,
                    crossAxisSpacing: 10,
                    mainAxisSpacing: 10),
                delegate: SliverChildBuilderDelegate(
                    (BuildContext context, int index) {
                  return new Container(
                    alignment: Alignment.center,
                    color: Colors.cyan[100 * (index % 9)],
                    child: Text('grid item $index'),
                  );
                }, childCount: 20),
              ),
            ),
            SliverFixedExtentList(
                itemExtent: 50,
                delegate: SliverChildBuilderDelegate(
                    (BuildContext context, int index) {
                  return new Container(
                    alignment: Alignment.center,
                    color: Colors.lightBlue[100 * (index % 9)],
                    child: Text('grid item $index'),
                  );
                }, childCount: 20))
          ],
        ),
      ),
    );
  }
}
