// let posts = [
//   { id: 1, message: "Hi, how are you", likesCount: 12 },
//   { id: 2, message: "Its my first post", likesCount: 20 },
// ];

// let dialogs = [
//   { id: 1, name: "Andrew" },
//   { id: 2, name: "Yarick" },
//   { id: 3, name: "Bodya" },
//   { id: 4, name: "Vasya" },
//   { id: 5, name: "Anton" },
//   { id: 6, name: "Mykola" },
// ];

// let messages = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "Hi, how are you" },
//   { id: 3, message: "Wassup" },
//   { id: 4, message: "Hi" },
//   { id: 5, message: "Some" },
//   { id: 6, message: "Else" },
// ];

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 12 },
      { id: 2, message: "Its my first post", likesCount: 20 },
    ],

  },
  messagesPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi, how are you" },
      { id: 3, message: "Wassup" },
      { id: 4, message: "Hi" },
      { id: 5, message: "Some" },
      { id: 6, message: "Else" },
    ],
    dialogs: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Yarick" },
        { id: 3, name: "Bodya" },
        { id: 4, name: "Vasya" },
        { id: 5, name: "Anton" },
        { id: 6, name: "Mykola" },
      ],
  },
};

export default state;
