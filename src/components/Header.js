import React from "react";

class Header extends React.Component {
  {if(localStorage.key)}
  render() {
    return (
      <div className="header">
        <header>
  <div class="header-nav">
    <a href="/">BLOG</a>
    <p>ようこそ、<%= locals.username %>さん</p>
    <ul>
      <li><a href="/list">記事一覧</a></li>
      <% if (locals.isLoggedIn) { %>
        <li><a href="/logout">ログアウト</a></li>
      <% } else { %>
        <li><a href="/signup">新規登録</a></li>
        <li><a href="/login">ログイン</a></li>
      <% } %>
    </ul>
  </div>
  <p>わんこの学びブログ</p>
</header><div className="header-logo">
        </div>
      </div>
    );
  }
}

export default Header;
