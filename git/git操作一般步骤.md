# git 操作一般步骤

## 1.本地代码与远程库建立联系

```cmd
git init
git remote add origin <url>
```

origin 是本地仓库的名字

## 2.查看本地仓库信息

```
git remote show <name>(origin)
```

## 3.新建分支

```cmd
git checkout -b RS200063
```

## 4.提交分支代码

```cmd
git push --set-upstream RS200063
```

直接 push 会报错，原因是没有鱼远程仓库分支/主支建立联系

## 5.分支重命名

git rename branch

## 6.版本回退

插件 git history

右击-> git view history

checkout id commit 不会覆盖其他历史
