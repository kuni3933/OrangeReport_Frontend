<div class="article">
        <% if (article.category === 'all') { %>
          <h1><%= article.title %></h1>
          <p><%= article.content %></p>
        <% } %>
        <% if (article.category === 'limited') { %>
          <i>会員限定</i>
          <h1><%= article.title %></h1>
          <% if (locals.isLoggedIn) { %>
            <p><%= article.content %></p>
          <% } else { %>
            <div class="article-login">
              <p>今すぐログインしよう！</p>
              <p>記事の続きは<br>ログインすると読むことができます</p>
              <img src="/images/login.svg">
              <a class="btn" href="/login">ログイン</a>
            </div>
          <% } %>
        <% } %>
      </div>