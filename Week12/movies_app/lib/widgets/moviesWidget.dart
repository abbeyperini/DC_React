import 'package:flutter/material.dart';
import 'package:movies_app/models/movies.dart';

class MoviesWidget extends StatelessWidget {
  final Movies search;

  MoviesWidget({this.search});

  @override
  Widget build(BuildContext context) {
    if (search != null) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("${search.Title}", style: TextStyle(fontSize: 32)),
            Text("${search.Year}")
          ],
        ),
      );
    }
    return Container();
  }
}
