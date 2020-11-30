import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:movies_app/models/movies.dart';
import 'package:movies_app/widgets/moviesWidget.dart';

void main() {
  runApp(App());
}

class App extends StatefulWidget {
  // This widget is the root of your application.
  @override
  _App createState() => _App();
}

class _App extends State<App> {
  Movies _movies;

  @override
  void initState() {
    super.initState();
    _populateMovies();
  }

  void _populateMovies() async {
    final movies = await _fetchMovies();
    setState(() {
      _movies = movies;
    });
  }

  Future<Movies> _fetchMovies() async {
    final response = await http
        .get("http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa");

    if (response.statusCode == 200) {
      final result = jsonDecode(response.body);
      return Movies.fromJson(result);
    } else {
      throw new Exception("Failed to load movies");
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: "Movies App",
        home: Scaffold(
            appBar: AppBar(title: Text("Weather App")),
            body: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [MoviesWidget(movies: _movies)],
            )));
  }
}
