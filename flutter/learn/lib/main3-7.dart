import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Material App',
        home: Scaffold(
            appBar: AppBar(
              title: Text('3-7 输入框和表单'),
            ),
            body: LoginFormPage()));
  }
}

class LoginPage extends StatefulWidget {
  LoginPage({Key key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  // 定义输入框controller
  // 用户controller
  TextEditingController _usernameController = TextEditingController();
  @override
  void initState() {
    super.initState();
    _usernameController.text = 'liuhao';
    _usernameController.selection =
        TextSelection(baseOffset: 1, extentOffset: 4);
    _usernameController.addListener(() {
      // 拿到输入框中的值
      print(_usernameController.text);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Theme(
        data: Theme.of(context).copyWith(
          inputDecorationTheme: InputDecorationTheme(
              labelStyle: TextStyle(color: Colors.green),
              hintStyle: TextStyle(color: Colors.yellow, fontSize: 14)),
        ),
        child: Column(
          children: <Widget>[
            TextField(
              controller: _usernameController,
              autofocus: true,
              decoration: InputDecoration(
                  labelText: '用户名',
                  hintText: '用户名和邮箱',
                  prefixIcon: Icon(Icons.person),
                  border: InputBorder.none),
            ),
            TextField(
              decoration: InputDecoration(
                  labelText: '密码',
                  hintText: '您的登录密码',
                  prefixIcon: Icon(Icons.lock)),
              obscureText: true,
            )
          ],
        ),
      ),
    );
  }
}

class LoginFormPage extends StatefulWidget {
  LoginFormPage({Key key}) : super(key: key);

  @override
  _LoginFormPageState createState() => _LoginFormPageState();
}

class _LoginFormPageState extends State<LoginFormPage> {
  // 用户controller
  TextEditingController _usernameController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
        child: Form(
          child: Column(
            children: <Widget>[
              TextFormField(
                controller: _usernameController,
                autovalidate: true,
                decoration: InputDecoration(
                    labelText: '用户名',
                    hintText: '用户名或手机号',
                    prefixIcon: Icon(Icons.person)),
                validator: (value) =>
                    value.trim().length > 0 ? null : '用户名不能为空',
              ),
              TextFormField(
                obscureText: true,
                decoration: InputDecoration(
                    labelText: '密码',
                    hintText: '您的登录密码',
                    prefixIcon: Icon(Icons.lock)),
                validator: (value) =>
                    value.trim().length > 6 ? null : '密码不能低于六位',
              ),
              Padding(
                  padding: const EdgeInsets.only(top: 20),
                  child: Row(
                    children: <Widget>[
                      Expanded(child: Builder(builder: (context) {
                        return RaisedButton(
                            padding: EdgeInsets.all(15.0),
                            child: Text('登录'),
                            color: Theme.of(context).primaryColor,
                            textColor: Colors.white,
                            onPressed: () {
                              if (Form.of(context).validate()) {
                                // 验证通过后
                                print(_usernameController.text);
                              }
                            });
                      })),
                    ],
                  ))
            ],
          ),
        ));
  }
}
