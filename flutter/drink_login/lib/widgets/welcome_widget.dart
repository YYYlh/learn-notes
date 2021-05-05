import 'package:drink_login/theme/app_colors.dart';
import 'package:drink_login/theme/app_size.dart';
import 'package:drink_login/theme/app_style.dart';
import 'package:flutter/material.dart';

class LoginTypeIconWidget extends StatelessWidget {
  const LoginTypeIconWidget({
    Key key,
    this.icon,
  }) : super(key: key);
  final String icon;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10),
      child: Image.asset(
        icon,
        width: 16,
        height: 16,
      ),
    );
  }
}

class LineWidget extends StatelessWidget {
  const LineWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 80,
      child: Divider(
        color: kTextColor,
      ),
    );
  }
}

// 登录按钮组件
class LoginBtnWidget extends StatelessWidget {
  const LoginBtnWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 208,
      height: 40,
      decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(kBtnRadius),
          boxShadow: kBtnShadow),
      alignment: Alignment.center,
      child: Text('Login', style: kBtnTextStyle),
    );
  }
}

// 渐变按钮组件
class GradientBtnWidget extends StatelessWidget {
  const GradientBtnWidget({
    Key key,
    this.child,
    this.width,
  }) : super(key: key);
  final Widget child;
  final double width;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: 40,
      decoration: BoxDecoration(
          gradient: kBtnLinearGradient,
          borderRadius: BorderRadius.circular(kBtnRadius),
          boxShadow: kBtnShadow),
      alignment: Alignment.center,
      child: child,
    );
  }
}

class BtnTextWhiteWidget extends StatelessWidget {
  const BtnTextWhiteWidget({
    Key key,
    this.text,
  }) : super(key: key);

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(text, style: kBtnTextStyle.copyWith(color: Colors.white));
  }
}

class WelcomeHeaderWidget extends StatelessWidget {
  const WelcomeHeaderWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Image.asset('assets/images/bg_welcome_header.png'),
        Positioned(
            top: 194,
            left: 40,
            child: Column(
              children: [
                AppIconWidget(),
                SizedBox(
                  height: 8,
                ),
                Text('Sour', style: kTitleTextStyle),
                SizedBox(
                  height: 8,
                ),
                Text(
                  'Best drink\nnreceipes',
                  style: kBodyTextStyle,
                )
              ],
            ))
      ],
    );
  }
}

class AppIconWidget extends StatelessWidget {
  const AppIconWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: kIconBoxSize,
      height: kIconBoxSize,
      decoration: BoxDecoration(color: Colors.white, shape: BoxShape.circle),
      alignment: Alignment.center,
      child: Image.asset(
        'assets/icons/app_icon.png',
        width: 24,
        height: 32,
      ),
    );
  }
}
