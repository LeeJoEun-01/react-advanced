
import './App.css';
import React, { useState, useRef } from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';

// // class 버전
// class Person extends React.PureComponent  { //Component 대신 PureComponent가 들어가면 밑에 'shouldComponentUpdate' 로직이 포함된 컴포넌트이다.
//   // componentDidMount() {
//   //   console.log("Foo componentDidMount", this.props.children);
//   // }
//   // componentWillUnmount() {
//   //   console.log("Foo componentWillUnmount");
//   // }

//   // //라이프 사이클 훅
//   // static getDerivedStateFromProps(nextProps, prevProps) {
//   //   console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
//   //   return {}; // return 꼭 해줘야 됨
//   // }

//   // 불필요한 랜더를 막아준다 ( = 최적화의 핵심 포인트 )
//   // shouldComponentUpdate(previousProps) { 
//   //   for (const key in this.props) {
//   //     if (previousProps[key] !== this.props[key]) {
//   //       return true;
//   //     }
//   //   }
//   //   return false;
//   // }

//   render() {
//     console.log("Person render");
//     const { name, age } = this.props;
//     return (
//       <div>
//         {name} / {age}
//       </div>
//     );
//   } 
// }

// //function 버전 (purecomponent와 같은 기능을 넣어주려면 arrow function으로 바꾸고 React.memo 함수를 사용해준다.)
// const Person = React.memo(({ name, age}) => {
//   console.log("Person render");
//   return (
//     <div>
//       {name} / {age}
//     </div>
//   );
// })

// // App component class 버전 
// class App extends React.Component {
//   // 엘리먼트의 타입이 다른 경우
//   state = {
//     // count: 0,
//     text: "",
//     persons: [
//       {id: 1, name: "Mark", age: 39},
//       {id: 2, name: "Hanna", age: 28}
//     ]
//   };

//   // componentDidMount() {
//   //   setInterval(() => {
//   //     this.setState({count: this.state.count + 1});
//   //   }, 1000);
//   // }

//   render() {
//     const { text, persons } = this.state;
//     return(
//       <div>
//         <input type="text" value={text} onChange={this._change} />
//         <ul>
//           {persons.map(person =>  {
//             return <Person 
//               {...person} 
//               key={person.id} 
//               onClick={this.toPersonClick} /> // onClick={() => {}} 함수를 안에 집어넣으면 랜더가 계속 돈다. 
//           })}
//         </ul>
//       </div>
//     );
//   }

//   _change = (e) => {
//     this.setState({
//       ...this.state,
//       text: e.target.value,
//     })
//   }

//   //따라서 랜더가 계속 도는 것을 방지하려면 함수를 메서드로 따로 만들어서 넣어여한다.
//   toPersonClick = () => {

//   }

//   // key props 예시
//   // render() {
//   //   if (this.state.count % 2 === 0) {
//   //     return (
//   //       <ul>
//   //         <Foo key="2">frist</Foo>
//   //         <Foo key="3">second</Foo>
//   //       </ul>
//   //     );
//   //   }

//   //   return (
//   //     <ul>
//   //         <Foo key="1">frist</Foo>
//   //         <Foo key="2">second</Foo>
//   //         <Foo key="3">third</Foo>
//   //       </ul>
//   //   );
//   // }
// }
// export default App;

// // App component funtion 버전 
// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       {id: 1, name: "Mark", age: 39},
//       {id: 2, name: "Hanna", age: 28}
//     ],
//   });

//   // 매번 만들어서 넣지 않고 필요한 경우에만 함수를 만들어서 넣겠다.(PureComponent같은 기능) => React.useCallback()
//   // dependency를 공백으로 넣으면 처음에만 밑에 함수가 만들어지고 다음부터는 계속 같은 함수만 사용한다.
//   const toPersonClick = React.useCallback(() => {}, []);

//   const { text, persons } = state;
//     return(
//       <div>
//         <input type="text" value={text} onChange={change} />
//         <ul>
//           {persons.map(person =>  {
//             return <Person 
//               {...person} 
//               key={person.id} 
//               onClick={toPersonClick} /> // onClick={() => {}} 함수를 안에 집어넣으면 랜더가 계속 돈다. 
//           })}
//         </ul>
//       </div>
//     );

//     function change(e) {
//       setState({
//         ...state,
//         text: e.target.value,
//       });
//     };
// }

// // createPortal 예시
// function App() {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return <div>
//     <button onClick={open}>open</button>
//     {visible && 
//       <Modal>
//         <div style={{
//           width: "100vw",
//           height: "100vh",
//           background: "rgba(0, 0, 0, 0.5)"
//         }} onClick={close}>Hello</div>
//       </Modal>}
//   </div>
// }

// forwardRef 예시
function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return <div>
    <MyInput ref={myInputRef} />
    <button onClick={click}>send</button>
  </div>
}

export default App;