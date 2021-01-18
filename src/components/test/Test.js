import React, { useState, useEffect } from "react";
import Form from "../form/Form";

const initialState = {
  isOpen: false,
  contacts: [],
  contactsCount: 0,
};

const Test = () => {
  const [state, setState] = useState({ ...initialState });

  //   componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
    if (localStorage.getItem("contacts")) {
      const contactsFromLS = JSON.parse(localStorage.getItem("contacts"));
      contactsFromLS.length &&
        setState({
          contacts: [...contactsFromLS],
          contactsCount: contactsFromLS.length,
        });
    }
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
    setState((prev) => ({ ...prev, contactsCount: state.contacts.length }));
  }, [state.contacts]);

  //Methods
  const onHandleClick = () => {
    // localStorage.setItem("contacts", JSON.stringify(contactsFromFetch));
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const addContact = (name) => {
    setState((prev) => ({
      ...prev,
      contacts: [...prev.contacts, { id: `${Date.now()}`, name }],
    }));
  };

  return (
    <div>
      <h2>Test</h2>
      <button type='button' onClick={onHandleClick}>
        {!state.isOpen ? "Open" : "Close"}
      </button>
      <h3>Count: {state.contactsCount}</h3>

      {state.contacts.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      {state.isOpen && <Form addContact={addContact} />}
    </div>
  );
};

export default Test;

// import React, { Component } from "react";
// import Form from "../form/Form";

// const contactsFromFetch = [
//   { id: "id-1", name: "Alex" },
//   { id: "id-2", name: "Nikita" },
// ];

// class Test extends Component {
//   state = {
//     isOpen: false,
//     contacts: [],
//     contactsCount: 0,
//   };

//   //   componentWillMount(){
//   //     console.log("componentWillMount");
//   //      this.setState({ contacts: [...contactsFromFetch] });
//   //   }

//   componentDidMount() {
// console.log("componentDidMount");
// // this.setState({ contacts: [...contactsFromFetch] });
// if (localStorage.getItem("contacts")) {
//   const contactsFromLS = JSON.parse(localStorage.getItem("contacts"));
//   contactsFromLS.length &&
//     this.setState({
//       contacts: [...contactsFromLS],
//       contactsCount: contactsFromLS.length,
//     });
// }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.contacts.length) {
//       return true;
//     } else return false;
//     //   console.log(nextState);
//   }

//   componentDidUpdate(_, prevState) {
//     // console.log("prevState", prevState);
//     // console.log("this.state", this.state);
//     // if (prevState.contactsCount === this.state.contactsCount)
//     // this.setState({contactsCount: this.state.contacts.length })

//     if (prevState.contacts.length !== this.state.contacts.length) {
//       console.log("state updated");
//       this.setState({ contactsCount: this.state.contacts.length });
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   onHandleClick = () => {
//     // this.setState((prev) => ({ isOpen: !prev.isOpen }));
//     localStorage.setItem("contacts", JSON.stringify(contactsFromFetch));
//   };

//   addContact = (name) => {
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, { id: `${Date.now()}`, name }],
//     }));
//   };

//   render() {
//     return (
//   <div>
//     <h2>Test</h2>
//     <button type='button' onClick={this.onHandleClick}>
//       {!this.state.isOpen ? "Open" : "Close"}
//     </button>
//     <h3>Count: {this.state.contactsCount}</h3>
//     <Form addContact={this.addContact} />

//     {this.state.contacts.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//     {this.state.isOpen && <Form />}
//   </div>
//     );
//   }
// }

// export default Test;





