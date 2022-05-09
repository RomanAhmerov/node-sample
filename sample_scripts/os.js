const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.cpus().length);

// const cpus = os.cpus();

// if (cluster.isMaster) {
//   for (let i = 0; i < cpus.length - 2; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Worker pid=${worker.process.pid} is dead`);

//     cluster.fork();
//   });
// } else {
//   console.log(`Worker pid=${process.pid} it's worked`);

//   setInterval(() => {
//     console.log(`Worker pid=${process.pid} is still working`);
//   }, 5000);
// }
