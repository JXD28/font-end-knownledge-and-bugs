# IPC 与 TCP

## 1.IPC

IPC，全名 Inter Process Communication 即进程间通讯，在同一台机器上的两个进程就用 IPC，不能跨物理机器。IPC 包括共享内存、队列、信号量等几种方式，由于 IPC 通讯效率之高，所以大量的 Unix 下软件都用 IPC 通讯，如 oracle。

## 2. TCP/IP

TCP/IP，全名 Transmission Control Protocol/Internet Protocol 即传输控制协议/网间网协议，TCP/IP 可在同一台机子或两台物理机或不同操作平台之间的两个进程进行通讯。

## 总结

如果两个进程在同一台机子且在同一个操作平台，可选择 IPC 或 TCI/IP 两种通讯方式都可以，但 IPC 效率高于 TCP/IP。采用 IPC 通讯，进程 1 直接把通讯包发给进程 2，采用 TCP/IP 通讯，进程 1 将要先把通讯包发给“LO”即本地环路接口，通过"LO"再把通讯包发给进程 2。

如果两个进程在不同的物理机上或在不同的操作平台，则不能用 IPC，这时用 TCP/IP 通讯，进程 1 把通讯包发给本机的物理网卡 1，物理网卡 1 通过网线把通讯包发给进程 2 所在的机器的物理网卡 2，网卡 2 再把通讯包发给进程 2。
