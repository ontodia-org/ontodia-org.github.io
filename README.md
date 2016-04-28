# Ontodia

## Writing posts

* Create a file in the <code>_posts</code> directory.<br/>
  Jekyll requires blog post files to be named according to the following format:

  ```
  YEAR-MONTH-DAY-title.MARKUP
  ```

  Where <code>YEAR</code> is a four-digit number, <code>MONTH</code> and
  <code>DAY</code> are both two-digit numbers, and <code>MARKUP</code> is the
  file extension representing the format used in the file. For example, the
  following are examples of valid post filenames:

  ```
  2016-04-28-how-to-write-a-blog.markdown
  ```

* At the beginning of the file, add the following structure:

  ```
  ---
  layout: post
  title: TITLE
  date: DATE
  author: AUTHOR
  categories:
  - CATEGORY1
  - CATEGORY2
  - CATEGORY3  
  img: BANNER
  ---
  ```

  For example, the following are examples of valid structure:

  ```
  ---
  layout: post
  title: "Ontodia integrates with GitHub and WebProtege"
  date: 2016-03-21 15:54:46
  author: Dmitry Pavlov
  categories:
  - news
  img: /assets/img/blog/img1.jpg
  ---
  ```

* Add <code><!-- more --></code> tag in your post. Post content before this tag
  will be marked as excerpt.
  For example:

  ```
  ---
  layout: post
  title: "Ontodia integrates with GitHub and WebProtege"
  date: 2016-03-21 15:54:46
  author: Dmitry Pavlov
  categories:
  - news
  img: /assets/img/blog/img1.jpg
  ---

  Just a couple of days ago we've finished a strongly requested integration
  feature for Ontodia.org. Now it accepts links to Github files and links to
  WebProtege projects as data sources for diagramming.

  Our web service is a simple tool for visualization of semantic datasets and
  ontology, hence it needs good integration means with repo hosting services
  and ontology production envirenments. To cover the use case of ontology
  production with visual verification we implemented integration of Ontodia
  with Github and WebProtege.

  <!-- more -->

  ## How to use it

  * Log in into Ontodia
  * In Dashboard under Data Source panel click "Create" button
  * In a dialogue box select either GitHub source or WebProtege project
  ```

* To add images to a post you must upload them to the
  <code>/assets/img/blog/</code> directory.<br/>
  And then you can add images to the content in the following ways:

  ```
  ![Alt text](/assets/img/blog/img.jpg "Optional title")
  <img src="/assets/img/blog/img.jpg " alt="Alt text" title="Optional title"/>
  ```
