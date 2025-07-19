# Basic HTML and CSS in Next.js & React.js Framework

## 安裝必要的node.js套件
```
npm install
```

## 啟動開發伺服器
```
npm run dev
```

## 關閉開發伺服器
```
Ctrl + C
```

## 路由配置計畫

- `/` 首頁 
- `/about` 關於我們 
- `/contact` 聯絡我們
- `/faq` 常見問題

## 如何表達一個頁面

- 一個頁面就是一個被放在`app`資料夾下的`page.js`
- 每一個`page.js`都必須是一個React元件

### 一個React元件

```jsx
export default function 頁面元件名稱() {
    return (
        <>
            頁面內容在此表達...
        </>
    )
}
```

## 環境變數檔案 .env 範例

```
OPENAI_API_KEY=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
```

## 安裝Git

1. 至 [Git官方網站](https://www.git-scm.com/) 下載並且安裝 Git
2. 設定使用者名稱與Email

```
git config --global user.name "你的使用者名稱"
git config --global user.email 你的EMAIL
```

## 更新至Github
```
git add .
git commit -m "這次所執行的變更"
git push origin main
```
