# Electron Api 总结

由于 Electron 使用 Chromium 显示网页，那么，Chromium 的多进程架构也被使用。Electron 中的每个网页都在自己的进程中运行，称为渲染器进程 (rendererprocess)。

-   app 控制应用的生命周期
-   BrowserWindow 创建控制浏览器窗口
-   globalShortcut 可以用来定义键盘的快捷键
-   dialog 可以用来打开和保存文件以及提示框功能
-   ipcMain 发送与接收 ipc 消息的一个模块（同步通信方式有坑，不要使用，在 win7 环境会导致页面渲染卡死）

Electron's process 对象继承 Node.js process object。

-   BrowserWindow

    -   在主进程中使用
    -   或者在渲染进程中使用 remote
    -   webPreferences:nodeIntegration:是否集成 node

    -   webContents:webContents 是一个 EventEmitter。 负责渲染和控制网页, 是 BrowserWindow 对象的一个属性。
        -   事件：很多
        -   send:主进程主动向渲染进程推数据(异步，深克隆，不会复制原型)
        -   openDevTools
        -   reload

-   IpcMain.on('xxx',(event,arg)=>{
    event.sender.send('xxx',data)
    })
