// // // class Phone {
// // //   constructor(name, serial, price) {
// // //     this.name = name;
// // //     this.serial = serial;
// // //     this.price = price;
// // //   }
// // //   fullDetails() {
// // //     return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
// // //   }
// // // }
// // // //
// // // class Tablet extends Phone {
// // //   constructor(name, serial, price, size) {
// // //     super(name, serial, price);
// // //     this.size = size || "unknown";
// // //   }
// // // }

// // // //
// // // let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// // // let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// // // let TabletThree = new Tablet("LG", 250450650, 650);

// // // console.log(`${TabletOne.fullDetails()}`);
// // // // iPad Serial is 100200300 And Size Is 12.9

// // // console.log(`${TabletTwo.fullDetails()}`);
// // // // Nokia Serial is 350450650 And Size Is 10.5

// // // console.log(`${TabletThree.fullDetails()}`);
// // //////////////////////////////////////////////
// // class User {
// //   #c;
// //   constructor(username, card) {
// //     this.u = username;
// //     this.#c = card;
// //   }
// //   showData() {
// //     return `Hello ${this.u} Your Credit Card Number Is ${this.#c
// //       .toString()
// //       .replace(/(\d{4})(\d{4})(\d{4})(\d+)/, "$1-$2-$3")}`;
// //   }
// // }

// // // Do Not Edit Anything Below

// // let userOne = new User("Osama", "1234-5678-1234-5678");
// // let userTwo = new User("Ahmed", "1234567812345678");
// // let userThree = new User("Ghareeb", 1234567812345678);

// // console.log(userOne.showData());
// // // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// // console.log(userTwo.showData());
// // // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// // console.log(userThree.showData());
// // // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// // console.log(userOne.c); // Prevent Accessing To Card Property Here
// // // Undefined
// // ///////

// // // let myString = "AaBbcdefG123!1234%^&*";
// // // let atozSmall = /[a-z]/g;
// // // let notatozSmall = /[a-z]/g;
// // // console.log(myString.match(atozSmall));
// // // console.log(myString.match(notatozSmall));
// // /////////////////////////////////

// // class User {
// //     #u;
// //   constructor(username) {
// //     this.#u = username;
// //   }
// //   addLove() {
// //     return `I Love ${this.u} Web School`;
// //   }
// // }
// // // Do Not Edit Below
// // let myStr = new User("Elzero");
// // console.log(myStr.addLove());
// //

// //
// // let date = new Date();
// let myDate = new Date() - new Date("oct 1, 97");
// // console.log(myDate);
// // let seconds = myDate / 1000;
// // console.log(seconds);
// // let minutes = seconds / 60;
// // console.log(minutes);
// // let hours = minutes / 60;
// // console.log(hours);
// // let days = hours / 24;
// // console.log(days);
// // let years = myDate / 1000 / 60 / 60 / 24 / 365;
// // console.log(years);
// // console.log(parseInt(years));
// // //
// // let dateNow = new Date();

// // dateNow.setFullYear(1980);
// // console.log(dateNow);
// // //
// // //
// // navigator.serviceWorker.ready.then(async (swReg) => {
// //   const bgFetch = await swReg.backgdFetch.fetch(
// //     "my-fetch",
// //     ["/ep-5.mp3", "ep-5-artwork.jpg"],
// //     
// //       title: "Episode 5: Interesting things.",
// //       icons: [
// //         {
// //           sizes: "300x300",
// //           src: "/ep-5-icon.png",
// //           type: "image/png",
// //         },
// //       ],
// //       downloadTotal: 60 * 1024 * 1024,
// //     }
// //   );
// // });
// // //
// function successCallback(result) {
//   console.log("Audio file ready at URL: " + result);
// }

// function failureCallback(error) {
//   console.error("Error generating audio file: " + error);
// }

// createAudioFileAsync(audioSettings, successCallback, failureCallback);
// // 