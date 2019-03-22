///#Test keypair
///@address: 0x9503463967e957a23b378898e8c3d1ca11356af7
///@private: 0x656337a2c7cf1cbc401412c06e5d9db510be5563195c20a17ca19f0013ebd018
///@public: 0xcd99385db802ae58127622fefb77ce7cdc14f38a03ee3e5aca88df045ecfd1292adbfc494ef1c7787670ee32b932d32e88d6c003160715f958502d3abc4bbcf3

import CITA from "@cryptape/cita-sdk";

/*  ~ Typescript Learning ~
 * Namespace (Module) > Interface (class) > declase (function) > type (cookies)
 **/
namespace Test {
  /* ~ Init consts ~
   *@cs: cita-sdk("url") ~> function handler
   *@ac: cita account
   **/
  const cs: any = CITA('http://localhost:1337');
  const bs: any = cs.base;
  const ca: object = bs.accounts.privateKeyToAccount(
    "0x656337a2c7cf1cbc401412c06e5d9db510be5563195c20a17ca19f0013ebd018"
  );
  console.log(cs);
  console.log(ca);
}

