---
title: "VSCodeを用いてsalesforce開発環境構築"
date: "2019-07-06"
tags: ["VSCode", "Salesforce", "IDE"]
---

# なぜVSCode使うのか？  
- eclipseおせぇ
- eclipse使いにくい
- eclipse自動補完機能がないことに等しい
- __VSCodeのextensionが多い__  
- etc...    

# 1)事前準備

1. [Salesforce CLI](https://developer.salesforce.com/docs/atlas.ja-jp.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)  
## Salesforce CLIをインストール  
```bash
sfdx plugins --core 
// インストールされているかどうかの確認   
```
```bash
sfdx --help 
// こちらのコマンドを使うと、
// 常にターミナルにてコマンドの使い方を確認できる
// https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference
```
1. [VSCode](https://code.visualstudio.com/)  
## VSCodeをインストール  
3. [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)  
## VSCodeに拡張機能をインストール  

# 2)ローカルに新しいプロジェクトを作成
Cmd+Shift+Pでコマンドパレットを開く  
下記のコマンドを入力
```
SFDX: Create Project with Manifest
```
![SFDX: Create Project with Manifest](./CreateProject.png)  
新規プロジェクト名を入力しフォルダを選ぶ  
![格納するフォルダを選ぶ](./CreateProject2.png)
こうしたら、新しいプロジェクトは指定のフォルダに格納される
![確認１](./CreateProject3.png)
treeでディレクトリの階層を確認
![確認2](./CreateProject4.png)
ここまで新しいプロジェクトを作成するのができた
# 3)組織に接続する
![組織に接続](./contactOrg.png)
そこで接続する組織を選択
![組織に接続2](./contactOrg2.png)
接続する組織名を入力(組織名は自由)
![組織に接続3](./contactOrg3.png)
IDとPWを入力
![組織に接続4](./contactOrg4.png)
接続成功
![組織に接続5](./contactOrg5.png)
ターミナルで確認できる  
そこで、開発環境は整えた
![組織に接続6](./contactOrg6.png)
# メタデータ取得とデプロイ
エクスプローラーにて右クリックすると  
![メタデータ取得とデプロイ](./final.png)
SFDX: Retrieve Source from OrgとSFDX: Deploy Source to Orgは使用できるようになっている。
それでVSCodeを使ってバリバリ開発することができるようになった