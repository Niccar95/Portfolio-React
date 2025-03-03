import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: "_TeZKUhH8wHVx8a5J",

  blockHeadless: true,
  blockList: {
    list: ["foo@emailjs.com", "bar@emailjs.com"],

    watchVariable: "userEmail",
  },
  limitRate: {
    id: "app",

    throttle: 10000,
  },
});

export default emailjs;
