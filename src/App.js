import React from "react";
import axios from "axios";

class App extends React.Component {
  // // React는 자동적으로 class의 render method를 실행한다.
  // state = {
  //   count: 0
  // };
  // add = () => {
  //   // 아래와 같이 직접 변경하면 refresh가 안되기 때문에 변화하지 않는다.
  //   // this.state.count += 1;

  //   // 외부 상태에 의존하는 코드는 좋은 코드가 아니다.
  //   // this.setState({count: this.state.count + 1});

  //   this.setState(current => ({count: current.count + 1}));
  // };
  // minus = () => {
  //   this.setState(current => ({count: current.count - 1}));
  // };
  // // state 는 object
  // render(){
  //   return (
  //   <div>
  //     <h1>I am a class: {this.state.count}</h1>
  //     <button onClick={this.add}>Add</button>
  //     <button onClick={this.minus}>Minus</button>
  //   </div>
  //   );
  // }
  state = {
    isLoading: true,
    movies: []

  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading } = this.state;
    return (

      <div>{isLoading ? "isLoading..." : "We are ready"}</div>
    );
  };
}

export default App;
