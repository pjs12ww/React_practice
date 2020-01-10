import React from "react";

// props.fav 과 {fav} 은 동일한 의미이다. => JS ES6의 기능
function Food({ name }) {
  // console.log(props);
  return <h1>I love {name}</h1>;
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "",
  },
  {
    id: 2,
    name: "ramen",
    imgae: "",
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name}></Food>
}

function App() {
  return <div>
    <h1>
      Hello
      </h1>
      {/* name은 prop = property 이다. string 뿐만 아니라 boolean, array 등을 포함할 수 있다. prop은 function 와 component 간 매개변수이다. */}
      <Food name="kimchi" />
      <Food name="ramen" />
      <Food name="samgiopsal" />
      {/* 동적으로 만들기 */}
      {/* Warning: Each child in a list should have a unique "key" prop. 발생 => key 값을 넣어 unique 부여 */}
      {foodILike.map(
        dish => (<Food key={dish.id} name={dish.name} />
      ))}
      {/*  */}
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>;
    
}

export default App;
