<div class="sign">
      <div class="container">
        <h1><a href="/list">BLOG</a></h1>
        <div class="panel">
          <h2>新規登録</h2>
          <% if (errors.length > 0) { %>
            <ul class="errors">
              <% errors.forEach(error => { %>
                <li><%= error %></li>
              <% }); %>
            </ul>
          <% } %>
          <form action="/signup" method="post">
            <p>ユーザー名</p>
            <input type="text" name="username">
            <p>メールアドレス</p>
            <input type="text" name="email">
            <p>パスワード</p>
            <input type="password" name="password">
            <input type="submit" value="登録する">
            <a href="/list">一覧にもどる</a>
          </form>
        </div>
      </div>
    </div>