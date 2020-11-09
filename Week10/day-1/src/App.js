import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PinnedArticle from './components/PinnedArticle';
import FeedArticle from './components/FeedArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <PinnedArticle />
      <FeedArticle title="Hello WatchKit" body="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." comments="12" likes="124"/>
      <FeedArticle title="Introduction to Swift" body="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflexts the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started." comments="15" likes="45"/>
    </div>
  );
}

export default App;
