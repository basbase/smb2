# @basbase/smb2

> A SMB2 implementation in TypeScript.

Forked from @awo00/smb2 (https://github.com/awo00/smb2) which is forked from https://github.com/ardean/smb2 using code from https://github.com/SamDecrock/node-http-ntlm to fix Node 17+ OpenSSL error to prevent having to use legacy support.

## Installation
```sh
$ npm i git://github.com/basbase/smb2.git
```

## Usage
```ts
import smb2 from "@basbase/smb2";

const client = new smb2.Client(host);
const session = await client.authenticate({
  domain,
  username,
  password
});
const tree = await session.connectTree(share);

const entries = await tree.readDirectory("/");
console.log(entries);
```

## Features

### Client
- watch shares for file and directory changes
- create, read & remove & rename files
- create, list & remove & rename directories
- check directory/file exists

## WIP
- SMB
- Server

## License

[MIT](LICENSE.md)
