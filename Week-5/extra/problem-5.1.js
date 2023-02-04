var obj2 = {
  firstName: "Jane",
  loop()  {
    console.log(this.firstName + " knows -- "); //Jane knows --
  }
};
console.log(obj2.firstName);
obj2.loop.bind({ firstName: "test" })();
obj2.loop();

var promiseHelper = {
  message: "not defined",
  log: function () {
    console.log(this);
    console.log(this.message + " Works");
  },
  log1: () => {
    console.log(this);
    console.log(this.message + " Works");
  },
};
promiseHelper.log.bind({ message: "test" })();
promiseHelper.log1.bind({ message: "test" })();

// return;
const actions = {
  doTask1: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Do Task 1");
      }, 500);
    });
  },
  doTask2: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Do Task 2");
      }, 500);
    });
  },
  doTask3: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Do Task 3");
      }, 500);
    });
  },

  messageLog: (message) => {
    promiseHelper.log.bind({ message })();
  },

  callbackResolve: (message) => {
    //Problem1:  Unable to call  messageLog inside other
    //messageLog(message); //ReferenceError: messageLog is not defined
    console.log("Callback Message: " + message);
    promiseHelper.log.bind({ message });
  },
  callbackReject: (message) => {
    //messageLog(message); //ReferenceError: messageLog is not defined

    console.log({ message, rejected: "rejected" });
    promiseHelper.log.bind({ message })();
  },
};

// actions.doTask1().then(actions.callbackResolve).catch(actions.callbackReject);
// actions.doTask2().then(actions.callbackResolve).catch(actions.callbackReject);
// actions.doTask3().then(actions.callbackResolve).catch(actions.callbackReject);

function Actions1() {
  this.doTask1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Do Task 1");
      }, 500);
    });
  };
  (this.doTask2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Do Task 2");
      }, 500);
    });
  }),
    (this.doTask3 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Do Task 3");
        }, 500);
      });
    });

  this.messageLog = (message) => {
    console.log("Message: " + message);
    promiseHelper.log.bind({ message })();
  };

  this.callbackResolve = (message) => {
    //Problem1:  Unable to call  messageLog inside other
    this.messageLog(message); //ReferenceError: messageLog is not defined

    // promiseHelper.log.bind({message});
  };
  this.callbackReject = (message) => {
    this.messageLog(message); //ReferenceError: messageLog is not defined

    console.log({ message, rejected: "rejected" });
    // promiseHelper.log.bind({ message })();
  };
}
// fn = promiseHelper.log.bind({ message : "test" })();
const Actions = new Actions1();
Actions.doTask1().then(Actions.callbackResolve).catch(Actions.callbackReject);
Actions.doTask2().then(Actions.callbackResolve).catch(Actions.callbackReject);
Actions.doTask3().then(Actions.callbackResolve).catch(Actions.callbackReject);
