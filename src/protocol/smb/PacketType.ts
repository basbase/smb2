enum PacketType {
  CreateDirectory = 0x00,
  DeleteDirectory = 0x01,
  Open = 0x02,
  Create = 0x03,
  Close = 0x04,
  Flush = 0x05,
  Delete = 0x06,
  Rename = 0x07,
  QueryInformation = 0x08,
  SetInformation = 0x09,
  Read = 0x0A,
  Write = 0x0B,
  LockByteRange = 0x0C,
  UnlockByteRange = 0x0D,
  CreateTemporary = 0x0E,
  CreateNew = 0x0F,
  CheckDirectory = 0x10,
  ProcessExit = 0x11,
  Seek = 0x12,
  LockAndRead = 0x13,
  WriteAndUnlock = 0x14,
  ReadRaw = 0x1A,
  ReadMultiplex = 0x1B,
  ReadMultiplexSecondary = 0x1C,
  WriteRaw = 0x1D,
  WriteMultiplex = 0x1E,
  WriteMultiplexSecondary = 0x1F,
  WriteComplete = 0x20,
  QueryServer = 0x21,
  SetInformation2 = 0x22,
  QueryInformation2 = 0x23,
  LockingAndX = 0x24,
  Transaction = 0x25,
  TransactionSecondary = 0x26,
  InputOutputControl = 0x27,
  InputOutputControlSecondary = 0x28,
  Copy = 0x29,
  Move = 0x2A,
  Echo = 0x2B,
  WriteAndClose = 0x2C,
  OpenAndX = 0x2D,
  ReadAndX = 0x2E,
  WriteAndX = 0x2F,
  NewFileSize = 0x30,
  CloseFileAndDisconnectTree = 0x31,
  Transaction2 = 0x32,
  Transaction2Secondary = 0x33,
  FindClose2 = 0x34,
  FindNotifyClose = 0x35,
  TreeConnect = 0x70,
  TreeDisconnect = 0x71,
  Negotiate = 0x72,
  SessionSetup = 0x73
};

export default PacketType;