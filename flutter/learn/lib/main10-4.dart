import 'package:flutter/material.dart';
import 'dart:math';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('10-4 自绘组件'),
        ),
        body: Center(
          child: CustomPaint(
            size: Size(300, 300),
            painter: MyPainter(),
          ),
        ),
      ),
    );
  }
}

class MyPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final count = 15;
    double eWidth = size.width / 15;
    double eHeight = size.height / 15;
    var paint = new Paint()
      ..isAntiAlias = true
      ..style = PaintingStyle.fill
      ..color = Color(0x77cdb175);
    canvas.drawRect(Offset.zero & size, paint);

    paint
      ..style = PaintingStyle.stroke
      ..color = Colors.black87
      ..strokeWidth = 1.0;
    // canvas.drawLine(Offset(0, 0), Offset(size.width, 0), paint);
    for (double i = 0; i <= count; i++) {
      double dy = eHeight * i;
      double dx = eWidth * i;
      canvas.drawLine(Offset(0, dy), Offset(size.width, dy), paint);
      canvas.drawLine(Offset(dx, 0), Offset(dx, size.height), paint);
    }

    paint
      ..style = PaintingStyle.fill
      ..color = Colors.black;
    final r = min(eHeight / 2, eWidth / 2) - 2;
    canvas.drawCircle(
        Offset((size.width - eWidth) / 2, (size.height - eHeight) / 2),
        r,
        paint);

    paint..color = Colors.white;
    canvas.drawCircle(
        Offset((size.width + eWidth) / 2, (size.height - eHeight) / 2),
        r,
        paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return true;
  }
}
