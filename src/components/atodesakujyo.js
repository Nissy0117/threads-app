import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const flowers = [
  { id: 1, name: "ひまわり" },
  { id: 2, name: "たんぽぽ" },
  { id: 3, name: "バラ" }
]

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route
          exact path="/"
          component={FlowerLists}
        />
        <Route
          path='/flower/:id'
          component={OneFlower}
        />
        <Route
          component={NoContents}
        />
      </Switch>
    </div>
  </Router>
);

const NoContents = () => (
  <div>No Contents!!</div>
)

const FlowerLists = () => {
  const flowerLists = flowers.map(e => (
    <li key={e.id}>
      <Link to={'/flower/' + e.id}>{e.name}</Link>
    </li>
  ));
  return (
    <ul>
      {flowerLists}
      <Link to={'/nocontents'}>No contents</Link>
    </ul>
  )
};

class OneFlower extends React.Component {
  render() {
    (① console.log(this.props))
    const params = this.props.match
    const id = parseInt(params.params.id, 10)
    const flower = flowers.filter(e => e.id === id)[0]
    return (
      <div>{id}: {flower.name} </div>
    )
  }
}

export default App;