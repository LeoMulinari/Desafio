import axios from 'axios';
import React from 'react';

export default class PersonList extends React.Component {
  state: State = { persons: [] };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          // eslint-disable-next-line react/jsx-key
          <li> {person.name}</li>
        ))}
      </ul>
    );
  }
}
interface PersonData {
  name: string;
}
interface State {
  persons: PersonData[];
}
