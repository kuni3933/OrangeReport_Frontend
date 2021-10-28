 <ul class="list">
        <% articles.forEach((article) => { %>
        <li>
          <% if (article.category === 'limited') {%>
            <i>会員限定</i>
          <% } %>
          <h2><%= article.title %></h2>
          <p><%= article.summary %></p>
          <a href="/article/<%= article.id %>">続きを読む</a>
        </li>
        <% }) %>
      </ul>