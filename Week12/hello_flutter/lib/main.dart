import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _App createState() => _App();
}

class _App extends State<MyApp> {
  final _controller = TextEditingController();

  final _toDoHistory = List<String>();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget build(BuildContext context) {
    return MaterialApp(
        title: "Hello Flutter",
        home: Scaffold(
            appBar: AppBar(title: Text("To Do List")),
            body: Center(
              child: Column(
                children: [
                  TextField(
                      controller: _controller,
                      decoration:
                          InputDecoration(border: OutlineInputBorder())),
                  FlatButton(
                      child: Text("ADD", style: TextStyle(color: Colors.white)),
                      color: Colors.green,
                      onPressed: () {
                        final text = _controller.text.toLowerCase();
                        _controller.value = _controller.value.copyWith(
                          text: text,
                          selection: TextSelection(
                              baseOffset: text.length,
                              extentOffset: text.length),
                          composing: TextRange.empty,
                        );
                        setState(() {
                          _toDoHistory.add(_controller.value.text);
                          _controller.clear();
                        });
                      }),
                  Expanded(
                    child: ListView.builder(
                      itemCount: _toDoHistory.length,
                      itemBuilder: (context, index) {
                        return ListTile(title: Text("${_toDoHistory[index]}"));
                      },
                    ),
                  )
                ],
              ),
            )));
  }
}
